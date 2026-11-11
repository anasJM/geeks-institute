const express = require("express");
const session = require("express-session");

const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Session
app.use(
  session({
    secret: "my-quiz-secret",
    resave: false,
    saveUninitialized: true,
  }),
);
const quizRouter = require("./routes/quiz.js");

app.use(express.json());
app.use("/quiz", quizRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
