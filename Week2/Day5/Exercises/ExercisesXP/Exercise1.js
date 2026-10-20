const people = ["Greg", "Mary", "Devon", "James"];
// 1
people.shift();
console.log(people);
// 2
people.splice(2, 1, "Jason");
console.log(people);
// 3
people.push("Anas");
console.log(people);
// 4
console.log(people.indexOf("Mary"));
// 5
array = people.slice(1);
console.log(array);
//  6
console.log(people.indexOf("Foo")); // -1 is not an index
// 7
let last = people[people.length - 1];
console.log(last);


// 1
for (const value of people) {
  console.log(value);
}

// 2
for (const value of people) {
    console.log(value)
    if (value == "Devon") {
        break;
    }
}