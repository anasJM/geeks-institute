import os
from dotenv import load_dotenv
from openai import OpenAI

from pydantic import BaseModel, ConfigDict

load_dotenv()

api_key = os.getenv("NVIDIA_API_KEY")
if not api_key or api_key == "PASTE_YOUR_NVIDIA_KEY_HERE":
    raise RuntimeError("Set NVIDIA_API_KEY in your local .env file first.")

class ConnectionResult(BaseModel):
    model_config=ConfigDict(extra="forbid")
    ok: bool

def structure_response(prompt: str)-> ConnectionResult:
    client=OpenAI(
        base_url=os.environ["BASE_URL"],
        api_key=api_key,
        timeout=60.0,
        max_retries=0,
    )

    response = client.chat.completions.parse(
        model=os.environ["MODEL"],
        messages=[
            {
                "role": "system",
                "content": "Extract validation from user input"
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        response_format=ConnectionResult
    )

    return response.choices[0].message.parsed

if __name__ == "__main__":
    result = structure_response("it's good")
    print(result.model_dump_json())
