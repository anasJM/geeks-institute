import express from "express";

const app = express();

const PORT = 3001;
const AI_SERVICE_URL = "http://127.0.0.1:5001";

app.use(express.json());

const orders = {
  A104: {
    order_id: "A104",
    status: "shipped",
    delivery_estimate: "2–3 business days",
  },
  A205: {
    order_id: "A205",
    status: "processing",
    delivery_estimate: null,
  },
  A306: {
    order_id: "A306",
    status: "delivered",
    delivery_estimate: null,
  },
  A407: {
    order_id: "A407",
    status: "processing",
    delivery_estimate: null,
  },
};

app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch(`${AI_SERVICE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: req.body?.message,
      }),
      signal: AbortSignal.timeout(30_000),
    });

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    const timedOut = error.name === "TimeoutError";

    return res.status(timedOut ? 504 : 502).json({
      error: timedOut
        ? "The AI service took too long."
        : "Could not reach the AI service.",
    });
  }
});

app.post("/api/assist", async (req, res) => {
  try {
    const response = await fetch(`${AI_SERVICE_URL}/assist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: req.body?.message,
      }),
      signal: AbortSignal.timeout(120_000),
    });

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    const timedOut = error.name === "TimeoutError";

    return res.status(timedOut ? 504 : 502).json({
      error: timedOut
        ? "The assistant request took too long."
        : "Could not reach the AI service.",
    });
  }
});

app.get("/internal/orders/:orderId", (req, res) => {
  const orderId = req.params.orderId.toUpperCase();

  if (!/^A[0-9]{3}$/.test(orderId)) {
    return res.status(400).json({
      error: "Invalid order ID format.",
    });
  }

  const order = orders[orderId];

  if (!order) {
    return res.status(404).json({
      error: "Order not found.",
    });
  }

  return res.json(order);
});

app.use((error, req, res, next) => {
  if (error.type === "entity.parse.failed") {
    return res.status(400).json({
      error: "Invalid JSON body.",
    });
  }

  return res.status(500).json({
    error: "Unexpected server error.",
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Express running at http://127.0.0.1:${PORT}`);
});
