
import os
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI, APIError, APITimeoutError
from flask import Flask, jsonify, request

# from tool_chat import answer_with_tool
from agent import run_agent

# Load environment variables
load_dotenv(Path(__file__).with_name(".env"))

api_key = os.getenv("NVIDIA_API_KEY")
base_url = os.getenv("BASE_URL")
model = os.getenv("MODEL")

if not api_key:
    raise RuntimeError("Set NVIDIA_API_KEY in ai-service/.env")

if not model:
    raise RuntimeError("Set MODEL in ai-service/.env")

app = Flask(__name__)

# Initialize NVIDIA client using OpenAI SDK
client = OpenAI(
    api_key=api_key,
    base_url=base_url,
    timeout=60.0,
    max_retries=0,
)

SYSTEM_PROMPT = """
You are a customer-support assistant.

Give clear, concise answers.
You do not have access to customer orders or company policies.
Do not invent order statuses, delivery dates, or company rules.
When information is missing, explain what is unavailable.

- Keep answers short.
- Use plain language.
- Ask a clarification question when necessary.
- Do not invent company policies, order statuses, delivery dates,
  or company rules.
- State clearly when information is unavailable.
"""


@app.get("/health")
def health():
    return jsonify({"status": "ok"})


@app.post("/chat")
def chat():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "error": "Send a JSON object."
        }), 400

    message = data.get("message")

    if not isinstance(message, str) or not message.strip():
        return jsonify({
            "error": "Message must be a non-empty string."
        }), 400

    message = message.strip()

    if len(message) > 2000:
        return jsonify({
            "error": "Message must be 2,000 characters or fewer."
        }), 400

    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": message
                }
            ],
            max_tokens=300,
        )

        answer = response.choices[0].message.content

        answer = (answer or "").strip()

        if not answer:
            return jsonify({
                "error": "The model returned no text answer."
            }), 502

        return jsonify({"answer": answer})

    except APIError as exc:
        app.logger.error(
            "NVIDIA API request failed: %s",
            str(exc),
        )

        app.logger.error(
            "HTTP status code: %s",
            getattr(exc, "status_code", "Unknown"),
        )

        return jsonify({
            "error": "The NVIDIA API request failed."
        }), 502

    except Exception:
        app.logger.exception("AI service error")

        return jsonify({
            "error": "Unable to connect to the AI service."
        }), 503

    except APITimeoutError:
        app.logger.exception("NVIDIA API request timed out")

        return jsonify({
            "error": "The AI request took too long."
        }), 504

@app.post("/assist")
def assist():
    print("\n***************************\n")
    print(f"URL: {request.url}")
    print("\n***************************\n")

    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "error": "Send a JSON object."
        }), 400

    message = data.get("message")

    if not isinstance(message, str) or not message.strip():
        return jsonify({
            "error": "Message must be a non-empty string."
        }), 400

    message = message.strip()

    if len(message) > 2000:
        return jsonify({
            "error": "Message must be 2,000 characters or fewer."
        }), 400

    try:
        result = run_agent(
            client=client,
            model=model,
            message=message,
        )
        print(f"Final result: {result}")

        return jsonify(result)

    except APITimeoutError:
        app.logger.exception("NVIDIA API request timed out")

        return jsonify({
            "error": "The AI request took too long."
        }), 504

    except APIError as exc:
        app.logger.error(
            "NVIDIA API request failed: %s",
            str(exc),
        )

        return jsonify({
            "error": "The NVIDIA API request failed."
        }), 502

    except ValueError:
        app.logger.exception("Assistant processing error")

        return jsonify({
            "error": "The assistant could not complete this request."
        }), 502

    except Exception:
        app.logger.exception("Unexpected assistant error")

        return jsonify({
            "error": "Unable to process your request."
        }), 503

if __name__ == "__main__":
    app.run(debug=True)
