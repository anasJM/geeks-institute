import getRandomEmojis from "./randomEmojis.js";

// DOM
const radioGroups = document.querySelectorAll(".radioGroup");
const emojiCharacter = document.querySelector("#emoji");
const form = document.querySelector("form");
const spanScore = document.querySelector("span");
const radioInputs = document.querySelectorAll(".radioInput");
const radioLabel = document.querySelectorAll("label");

// if div click check the radio input
radioGroups.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.children[0].checked = true;
  });
});

// render emoji and choices
function renderEmojis(randomEmojis) {
  emojiCharacter.textContent = randomEmojis.correctAnswer.emoji;
  // set radio values
  radioInputs.forEach((radio, index) => {
    radio.value = randomEmojis.emojis[index];
  });
  // set label values
  radioLabel.forEach((label, index) => {
    label.textContent = randomEmojis.emojis[index];
  });
}

// initialize content
let randomEmojis = getRandomEmojis();
renderEmojis(randomEmojis);

// form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // get the checked radio input
  const userChoiceInput = document.querySelector(
    "input[name='userChoice']:checked",
  );
  // console.log(userChoiceInput.parentElement.children[1]);
  const userChoiceValue = userChoiceInput.value;
  // fetch the user choice to server for checking
  try {
    const response = await fetch("http://localhost:5000/userChoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userChoice: userChoiceValue,
        correctAnswer: randomEmojis.correctAnswer,
      }),
    });
    const result = await response.json();
    if (!result) {
      console.log("Incorrect answer:", result);
      userChoiceInput.parentElement.classList.add("incorrect");
      userChoiceInput.parentElement.children[1].textContent = "Incorrect";
    } else {
      spanScore.textContent = result.score;
      console.log("Correct answer:", result);
      userChoiceInput.parentElement.classList.add("correct");
      userChoiceInput.parentElement.children[1].textContent = "Correct";
    }
  } catch (error) {
    console.log(error);
  }

  // set time out
  setTimeout(() => {
    // reset radio group div style
    userChoiceInput.parentElement.classList.remove("incorrect");
    userChoiceInput.parentElement.classList.remove("correct");
    // uncheck the input
    userChoiceInput.checked = false;
    // rerender the choices
    randomEmojis = getRandomEmojis();
    renderEmojis(randomEmojis);
  }, 2000);
});
