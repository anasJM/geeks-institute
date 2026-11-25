import re

POLICIES = [
    {
        "id": "shipping-delays",
        "title": "Shipped orders and delivery delays",
        "keywords": {
            "shipped", "shipping", "delivery",
            "late", "delay", "delayed",
        },
        "text": (
            "For a shipped order, review its delivery estimate. "
            "If that estimate has passed, contact support with "
            "the order reference so the shipment can be investigated."
        ),
    },
    {
        "id": "processing-orders",
        "title": "Orders being prepared",
        "keywords": {
            "processing", "preparation",
            "preparing", "dispatch",
        },
        "text": (
            "An order marked processing is being prepared. "
            "A delivery estimate may not yet be available. "
            "Contact support if you need help with its progress."
        ),
    },
    {
        "id": "delivered-not-received",
        "title": "Delivered orders not received",
        "keywords": {
            "delivered", "missing",
            "received", "recipient",
        },
        "text": (
            "If an order is marked delivered but has not been received, "
            "check the delivery location and ask other recipients. "
            "Contact support if the package cannot be located."
        ),
    },
]

def search_policy(query):
    words = set(re.findall(r"[a-z]+", query.lower()))
    ranked = []

    for policy in POLICIES:
        score = len(words & policy["keywords"])

        if score > 0:
            ranked.append((score, policy))

    ranked.sort(
        key=lambda item: (-item[0], item[1]["id"])
    )

    matches = [
        {
            "id": policy["id"],
            "title": policy["title"],
            "text": policy["text"],
        }
        for _, policy in ranked[:2]
    ]

    return {
        "ok": True,
        "matches": matches,
    }