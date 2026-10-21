// #
const div = document.querySelector("div");
console.log(div.textContent);

// #
const ul = document.querySelectorAll("ul");
ul[0].children[1].textContent = "Richard";

// #
ul[1].children[1].remove();

// #
ul.forEach((element) => {
  element.children[0].textContent = "Anas";
});

// #
ul.forEach((element) => {
  element.classList.add("student_list");
});

// #
ul[0].classList.add("university", "attendance");

// #
div.style.backgroundColor = "lightBlue";
div.style.padding = "20px";

// #
ul.forEach((element) => {
  if (element.lastElementChild.textContent == "Dan") {
    element.lastElementChild.style.display = "none";
  }
});

// #
ul[0].children[1].style.border = "1px solid";

// #
document.body.style.fontSize = "30px";
