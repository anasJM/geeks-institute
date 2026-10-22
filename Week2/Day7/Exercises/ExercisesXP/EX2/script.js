//#
const form = document.querySelector("form");
console.log(form);

//#
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const submit = document.getElementById("submit");

console.log(fname);
console.log(lname);
console.log(submit);

//#
const firstname = document.getElementsByName("firstname");
const lastname = document.getElementsByName("lastname");

console.log(firstname);
console.log(lastname);

//#
const ul = document.querySelector("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form["fname"].value != "" && form["lname"].value != "") {
    let fname = form["fname"].value;
    let lname = form["lname"].value;
    const listItem1 = document.createElement("li");
    listItem1.textContent = fname;
    const listItem2 = document.createElement("li");
    listItem2.textContent = lname;
    ul.append(listItem1, listItem2);
  }
});
