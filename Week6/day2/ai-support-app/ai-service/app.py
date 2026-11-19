
import os
from pathlib import Path

from google import genai
from google.genai import types
from google.genai.errors import APIError
from dotenv import load_dotenv
from flask import Flask, jsonify, request

load_dotenv(Path(__file__).with_name(".env"))

api_key = os.getenv("GEMINI_API_KEY")
model = os.getenv("LLM_MODEL", "gemini-3.5-flash-lite")

if not api_key:
    raise RuntimeError(
        "Set GEMINI_API_KEY in ai-service/.env"
    )

app = Flask(__name__)

client = genai.Client(api_key=api_key)

SYSTEM_PROMPT = """
You are a customer-support assistant.

Give clear, concise answers.
You do not have access to customer orders or company policies.
Do not invent order statuses, delivery dates, or company rules.
When information is missing, explain what is unavailable.
- Keep answers short.
- Use plain language.
- Ask a clarification question when necessary.
- Do not invent company policies, order statuses, delivery dates, or company rules.
- You do not have access to customer orders or company policies. State clearly when information is unavailable.
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
        response = client.models.generate_content(
            model=model,
            contents=message,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT,
                max_output_tokens=300,
            ),
        )

        answer = (response.text or "").strip()

        if not answer:
            return jsonify({
                "error": "The model returned no text answer."
            }), 502

        return jsonify({"answer": answer})

    except APIError as exc:
        app.logger.error(
            "Gemini API request failed: %s",
            str(exc),
        )

        app.logger.error(
            "HTTP status code: %s",
            getattr(exc, "code", "Unknown"),
        )

        return jsonify({
            "error": "The Gemini API request failed."
        }), 502

    except Exception:
        app.logger.exception("AI service error")

        return jsonify({
            "error": "Unable to connect to the AI service."
        }), 503


if __name__ == "__main__":
    app.run(debug=True)
