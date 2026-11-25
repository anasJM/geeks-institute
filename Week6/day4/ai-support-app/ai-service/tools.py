import re

import requests
from pydantic import BaseModel, ConfigDict, Field, ValidationError

from policies import search_policy


# Order argument structure
class OrderLookupArguments(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
        strict=True,
    )

    order_id: str = Field(
        pattern=r"^A[0-9]{3}$",
        description="An order reference such as A104.",
    )

# policy search argument structue
class PolicySearchArguments(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
        strict=True,
    )

    query: str = Field(
        min_length=1,
        max_length=200,
        description="Short keywords describing the relevant policy.",
    )

# search policy tool object

SEARCH_POLICY_TOOL = {
    "type": "function",
    "function": {
        "name": "search_policy",
        "description": (
            "Search the fictional store's short policy records. "
            "Use it for questions requiring store-specific guidance. "
            "When guidance depends on an order's status, first retrieve "
            "the order and use that status in the search query. "
            "An empty result means no matching policy was retrieved."
        ),
        "parameters": PolicySearchArguments.model_json_schema(),
    },
}


# Get order tool object
GET_ORDER_TOOL = {
    "type": "function",
    "function": {
        "name": "get_order_status",
        "description": "Retrieve the status of a customer order.",
        "parameters": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "The order ID."
                }
            },
            "required": ["order_id"],
            "additionalProperties": False
        }
    }
}

# tool error
def tool_error(code, message):
    return {
        "ok": False,
        "error": {
            "code": code,
            "message": message,
        },
    }

# Get order tool
def get_order_status(order_id):
    try:
        response = requests.get(
            f"http://127.0.0.1:3001/internal/orders/{order_id}",
            timeout=5,
        )

        if response.status_code == 404:
            return tool_error(
                "order_not_found",
                "No matching order was found.",
            )

        response.raise_for_status()
        order = response.json()

        if (
            not isinstance(order, dict)
            or order.get("order_id") != order_id
            or order.get("status")
            not in {"processing", "shipped", "delivered"}
        ):
            return tool_error(
                "invalid_api_response",
                "The order API returned unexpected data.",
            )

        return {
            "ok": True,
            "order": order,
        }

    except requests.Timeout:
        return tool_error(
            "order_api_timeout",
            "The order API did not respond in time.",
        )

    except (requests.RequestException, ValueError):
        return tool_error(
            "order_api_unavailable",
            "The order information could not be retrieved.",
        )

TOOL_DEFINITIONS = [
    GET_ORDER_TOOL,
    SEARCH_POLICY_TOOL,
]

TOOL_REGISTRY = {
    "get_order_status": {
        "arguments": OrderLookupArguments,
        "handler": get_order_status,
    },
    "search_policy": {
        "arguments": PolicySearchArguments,
        "handler": search_policy,
    },
}

# execute the tool
def execute_tool(name, arguments, user_message):
    entry = TOOL_REGISTRY.get(name)

    if entry is None:
        return tool_error(
            "unknown_tool",
            "The requested operation is unavailable.",
        )

    try:
        validated = entry["arguments"].model_validate(arguments)
    except ValidationError:
        return tool_error(
            "invalid_arguments",
            "The tool arguments failed validation.",
        )

    if name == "get_order_status":
        explicit_ids = {
            value.upper()
            for value in re.findall(
                r"\bA[0-9]{3}\b",
                user_message,
                flags=re.IGNORECASE,
            )
        }

        if validated.order_id not in explicit_ids:
            return tool_error(
                "unsupported_order_id",
                "The order ID was not provided in the message.",
            )

    return entry["handler"](**validated.model_dump())