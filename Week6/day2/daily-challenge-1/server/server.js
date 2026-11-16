const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.get("/api/hello", (req, res) => {
  return res.json({ message: "Hello From Express" });
});

app.post("/api", (req, res) => {
  const input = req.body.input;
  if (!input) {
    return res.status(404).json({ error: "not found" });
  }
  return res.json({ input: input });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
