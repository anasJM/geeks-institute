# AI Library Assistant

An AI-powered library assistant built with Python and the NVIDIA API. It uses **LLM Function Calling** to search for books and check their availability in a library catalog.

## Features

- Search for books by title.
- Retrieve book information and IDs.
- Check the number of available copies.
- Distinguish between available, unavailable, and non-existent books.
- Generate structured responses using Pydantic.
- Use AI function calling to interact with Python functions.

## Technologies Used

- Python
- NVIDIA API
- OpenAI Python SDK (NVIDIA-compatible API)
- Pydantic
- python-dotenv
- JSON

## Project Structure

```text
library-assistant/
│
├── app.py
├── tools.py
├── schemas.py
├── books.json
├── .env
├── .gitignore
└── requirements.txt
```

## Prerequisites

Before getting started, make sure you have:

- Python 3.10 or higher.
- A NVIDIA API key from [NVIDIA Build](https://build.nvidia.com/).
- Git (optional).

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/anasJM/geeks-institute/tree/main/Week8/day7/daily-challenge/library-assistant
cd AI-Library-Assistant
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

### 3. Activate the virtual environment

**Windows (PowerShell):**

```powershell
.\.venv\Scripts\Activate.ps1
```

**Windows (CMD):**

```cmd
.venv\Scripts\activate
```

**Linux / macOS:**

```bash
source .venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

If you don't have a `requirements.txt` file yet, create one with:

```text
openai
pydantic>=2,<3
python-dotenv
```

Then run:

```bash
pip install -r requirements.txt
```

### 5. Configure environment variables

Create a `.env` file in the project root:

```env
NVIDIA_API_KEY=your_nvidia_api_key
BASE_URL=https://integrate.api.nvidia.com/v1
MODEL=your_available_nvidia_model
```

Replace the placeholders with your actual NVIDIA API key and a model available to your account.

**Important:** Never share your API key or commit your `.env` file to GitHub.

## Run the Application

Make sure your virtual environment is activated, then execute:

```bash
python app.py
```

Or, on Windows:

```powershell
.\.venv\Scripts\python.exe app.py
```

You should see:

```text
Hello, how can I help you?
Message:
```

Enter a question, for example:

```text
Is Introduction to AI available?
```

## Example Interaction

Suppose `books.json` contains:

```json
[
  {
    "book_id": "B002",
    "title": "Introduction to AI",
    "available_copies": 0
  }
]
```

Example output:

```text
Executing: find_book
Arguments: {'title': 'Introduction to AI'}

Result:
{
  'found': True,
  'book_id': 'B002',
  'title': 'Introduction to AI'
}

Executing: check_availability
Arguments: {'book_id': 'B002'}

Result:
{
  'book_id': 'B002',
  'available_copies': 0
}
```

Expected structured response:

```json
{
  "book_title": "Introduction to AI",
  "book_id": "B002",
  "status": "unavailable",
  "message": "No copies of 'Introduction to AI' are currently available."
}
```

## How It Works

1. The user submits a question.
2. The AI model analyzes the request.
3. The model decides which function to call.
4. Python executes the requested function.
5. The function result is sent back to the AI model.
6. The model generates a final response.
7. Pydantic validates the response structure.

## Security

Add the following to `.gitignore`:

```gitignore
.venv/
.env
__pycache__/
*.pyc
```

This prevents sensitive environment variables and unnecessary files from being committed.

## License

This project is intended for educational and learning purposes.
