// #
const h1 = document.querySelector("h1");
console.log(h1);

// #
const article = document.querySelector("article");
article.lastElementChild.remove();

// #
const h2 = document.querySelector("h2");
h2.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
});

// #
const h3 = document.querySelector("h3");
h3.addEventListener("click", (e) => {
  e.target.style.display = "none";
});

// #
const button = document.querySelector("button");
const p = document.querySelectorAll("p");
button.addEventListener("click", (e) => {
  p.forEach((element) => {
    element.style.fontWeight = "bold";
  });
});

//#
h1.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = `${Math.floor(Math.random() * 100)}px`;
});

// #
p[1].addEventListener("mouseover", (e) => {
  e.target.classList.add("fade-out");
});
