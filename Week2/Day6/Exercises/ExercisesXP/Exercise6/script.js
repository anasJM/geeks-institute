const div = document.querySelector("div");

// #
div.setAttribute("id", "socialNetworkNavigation");

// #
const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.append(text);
div.children[0].appendChild(newLi);

// #
console.log(div.children[0].firstElementChild.textContent);
console.log(div.children[0].lastElementChild.textContent);
