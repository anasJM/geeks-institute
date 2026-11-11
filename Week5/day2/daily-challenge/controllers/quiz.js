const triviaQuestions = require("../data/data.js");

// Start the quiz
function startQuiz(req, res) {
  req.session.currentIndex = 0;
  req.session.score = 0;
  req.session.feedback = "";

  res.redirect("/quiz/question");
}

// get question
function getQuestion(req, res) {
  const index = req.session.currentIndex;
  // check if quiz finished
  if (index === undefined || index >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  const currentQuestion = triviaQuestions[index];
  res.send(`
    <h1>Trivia Quiz</h1>

    <p>${req.session.feedback || ""}</p>

    <h2>Question ${index + 1} of ${triviaQuestions.length}</h2>

    <h3>${currentQuestion.question}</h3>

    <form action="/quiz" method="POST">
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer"
        required
      />

      <button type="submit">Submit Answer</button>
    </form>
  `);
}

// Submit an answer to the current question and move to the next question
function submitAnswer(req, res) {
  const index = req.session.currentIndex;
  const userAnswer = req.body.answer.toLowerCase();
  const answer = triviaQuestions[index].answer;

  // check user answer
  if (answer.toLowerCase() != userAnswer) {
    req.session.feedback = `Incorrect! the correct answer is ${triviaQuestions[index].answer}`;
  } else {
    req.session.feedback = "Correct answer!";
    req.session.score++;
  }

  // increment index
  req.session.currentIndex++;

  // check quiz is finished
  if (req.session.currentIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  res.redirect("/quiz/question");
}

// Display the user’s final score at the end of the quiz
function displayFinalScore(req, res) {
  const score = req.session.score;
  const total = triviaQuestions.length;

  res.send(`
    <h1>Quiz Finished!</h1>

    <h2>Your final score: ${score} / ${total}</h2>

    <p>
      ${
        score === total
          ? "Excellent! You got all answers correct!"
          : "Good effort! Keep practicing."
      }
    </p>

    <a href="/quiz">Play Again</a>
  `);
}

module.exports = {
  startQuiz,
  getQuestion,
  submitAnswer,
  displayFinalScore,
};
