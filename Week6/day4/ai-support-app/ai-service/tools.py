import re

import requests
from pydantic import BaseModel, ConfigDict, Field, ValidationError


class OrderLookupArguments(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
        strict=True,
    )

    order_id: str = Field(
        pattern=r"^A[0-9]{3}$",
        description="An order reference such as A104.",
    )


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


def tool_error(code, message):
    return {
        "ok": False,
        "error": {
            "code": code,
            "message": message,
        },
    }


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


TOOL_HANDLERS = {
    "get_order_status": get_order_status,
}


def execute_tool(name, arguments, user_message):
    print(f"Tool handler: {TOOL_HANDLERS}")
    print("\n***************************\n")
    if name not in TOOL_HANDLERS:
        return tool_error(
            "unknown_tool",
            "The requested operation is unavailable.",
        )

    try:
        validated = OrderLookupArguments.model_validate(arguments)
    except ValidationError:
        return tool_error(
            "invalid_arguments",
            "The order ID must use a format such as A104.",
        )

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
            "The requested order ID was not provided in the message.",
        )

    handler = TOOL_HANDLERS[name]
    return handler(validated.order_id)