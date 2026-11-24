import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!message.trim() || loading) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("/api/assist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Request failed.");
      }

      setResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 20 }}>
      <h1>Order Support Assistant</h1>

      <p>Ask about a synthetic order: A104, A205, or A306.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Your request</label>

        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          maxLength={2000}
          style={{
            display: "block",
            width: "100%",
            margin: "12px 0",
          }}
        />

        <button disabled={loading || !message.trim()}>
          {loading ? "Processing..." : "Send"}
        </button>
      </form>

      {error && <p role="alert">{error}</p>}

      {result && (
        <section aria-live="polite">
          <h2>Answer</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{result.answer}</p>

          <h2>Tool activity</h2>

          {result.tool_events.length === 0 ? (
            <p>No tool was executed.</p>
          ) : (
            result.tool_events.map((event, index) => (
              <details key={index}>
                <summary>
                  {event.name} — {event.status}
                </summary>

                <pre style={{ overflowX: "auto" }}>
                  {JSON.stringify(event.result, null, 2)}
                </pre>
              </details>
            ))
          )}
        </section>
      )}

      <p>Each request uses only the current message.</p>
    </main>
  );
}
