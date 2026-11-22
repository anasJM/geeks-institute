tools = [
        {
            "type": "function",
            "function": {
                "name": "find_book",
                "description": "Find a library book using its title.",
                "parameters": {
                    "type": "object",
                    "properties": {"title": {"type": "string"}},
                    "required": ["title"],
                    "additionalProperties": False,
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "check_availability",
                "description": "check book's availability using its book's id",
                "parameters": {
                    "type": "object",
                    "properties": {"book_id": {"type": "string"}},
                    "required": ["book_id"],
                    "additionalProperties": False,
                },
            },
        }
    ]