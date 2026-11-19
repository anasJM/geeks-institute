import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!message.trim() || loading) return;

    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const response = await fetch("/api/chat", {
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

      setAnswer(data.answer);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 700, margin: "40px auto", padding: 20 }}>
      <h1>Customer Support Assistant</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Your question</label>

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
          {loading ? "Generating..." : "Send"}
        </button>
      </form>

      {error && <p role="alert">{error}</p>}

      {answer && (
        <section aria-live="polite">
          <h2>Answer</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{answer}</p>
        </section>
      )}
    </main>
  );
}
