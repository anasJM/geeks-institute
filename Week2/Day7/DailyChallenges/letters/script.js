const input = document.getElementById("textInput");

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const letters = alphabets.split("");

input.addEventListener("keyup", (e) => {
  let currentValue = e.target.value;
  if (!letters.includes(e.key)) {
    e.target.value = currentValue.slice(0, -1);
  }
});
