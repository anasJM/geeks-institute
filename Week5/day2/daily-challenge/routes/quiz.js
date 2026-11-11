const express = require("express");
const quizController = require("../controllers/quiz.js");
const quizRouter = express.Router();

quizRouter.get("/", quizController.startQuiz);
quizRouter.get("/question", quizController.getQuestion);
quizRouter.post("/", quizController.submitAnswer);
quizRouter.get("/score", quizController.displayFinalScore);

module.exports = quizRouter;
