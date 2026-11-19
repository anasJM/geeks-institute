import express from "express";

const app = express();

const PORT = 3001;
const AI_SERVICE_URL = "http://127.0.0.1:5001";

app.use(express.json());

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
