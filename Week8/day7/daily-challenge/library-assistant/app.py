import json
import os
from dotenv import load_dotenv
from openai import OpenAI
from tools import tools
from schemas import LibraryResponse

#  load books from books.json
with open("books.json", "r", encoding="utf-8") as file:
    books = json.load(file)

# check for book existance
def find_book(title:str):
    if books:
        for book in books:
            if book["title"].strip().lower() == title.strip().lower():
                return {
                    "found": True, 
                    "book_id": book["book_id"], 
                    "title": book["title"]
                }

        return {
            "found": False, 
            "book_id": None, 
            "title": title
        }
    else:
        print("i can't find books")

# check book's availability
def check_availability(book_id: str):
    for book in books:
        if book["book_id"] == book_id:
            return {
                "book_id": book_id,
                "available_copies": book["available_copies"]
            }
    return {
        "error": "Book not found",
        "book_id": book_id
    }

# call function by model
def call_function(name, args):
    if name == "find_book":
        return find_book(**args)
    elif name == "check_availability":
            return check_availability(**args)
    else: 
        raise ValueError(f"Unknown function: {name}")

# model choose tool function
def inteligence_with_tools(prompt:str):
    load_dotenv()

    api_key = os.getenv("NVIDIA_API_KEY")
    if not api_key or api_key == "PASTE_YOUR_NVIDIA_KEY_HERE":
        raise RuntimeError("Set NVIDIA_API_KEY in your local .env file first.")

    client = OpenAI(
        base_url=os.environ["BASE_URL"],
        api_key=api_key,
        timeout=60.0,
        max_retries=0,
    )

    SYSTEM_PROMPT = """
        You are a helpful library assistant.

        When checking a book, follow these rules strictly:

        1. If the book does not exist in the library:
        status = "not_found"

        2. If the book exists and available_copies > 0:
        status = "available"

        3. If the book exists and available_copies == 0:
        status = "unavailable"

        IMPORTANT:
        - A book with zero available copies is NOT a missing book.
        - Never use "not_found" when the book exists.
        - Always return a valid JSON response matching the LibraryResponse schema.
    """
    
    messages = [{"role": "user", "content": prompt}]

    for _ in range(5):

        response = client.chat.completions.create(
            model=os.environ["MODEL"],
            messages=messages,
            tools=tools,
            tool_choice="auto"
        )

        response_message = response.choices[0].message

        # Check if the model wants to call a tool
        # if not parse the model result and return a final parsed response
        if not response_message.tool_calls:
            messages.append({
                "role": "system",
                "content": SYSTEM_PROMPT
            })
            final_response = client.beta.chat.completions.parse(
                model=os.environ["MODEL"],
                messages=messages,
                response_format=LibraryResponse,
                max_tokens=2048,
            )

            message = final_response.choices[0].message
            if message.refusal:
                raise ValueError("The model declined to provide a final answer.")

            result = message.parsed
            if result is None:
                raise ValueError("The model returned no parsed final answer.")

            print("Parsed message: ")

            return result.model_dump_json(indent=2)

        # Add assistant tool calls to conversation
        messages.append(response_message)

        # Execute requested tools
        for tool_call in response_message.tool_calls:

            function_name = tool_call.function.name

            function_args = json.loads(
                tool_call.function.arguments
            )

            print(f"Executing: {function_name}")
            print(f"Arguments: {function_args}")

            result = call_function(function_name, function_args)

            print(f"Result: {result}")

            # Send tool result back to the model
            messages.append({
                "tool_call_id": tool_call.id,
                "role": "tool",
                "name": function_name,
                "content": json.dumps(result)
            })

    return "Maximum tool-call rounds reached."

# test tools
if __name__ == "__main__":
    user_question = input("Hello, how can i help you ? \nMessage: ")
    result = inteligence_with_tools(user_question)
    print(result)
