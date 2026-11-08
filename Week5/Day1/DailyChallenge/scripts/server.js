import express from "express";
import cors from "cors";

const app = express();

let score = 0;

// Enable CORS
app.use(cors());

// parsing data from body
app.use(express.json());

// start server
app.listen(5000, () => {
  console.log("Server is listening on the port 5000");
});

// POST check for user choice
app.post("/userChoice", (req, res) => {
  const userChoice = req.body.userChoice;
  const correctAnswer = req.body.correctAnswer;
  if (userChoice !== correctAnswer.name) {
    res.json(false);
  } else {
    score += 10;
    res.json({ ...correctAnswer, score });
  }
});
