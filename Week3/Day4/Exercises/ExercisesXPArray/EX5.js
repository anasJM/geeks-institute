const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

let string = epic.reduce((current, next) => current + next + " ", "");
console.log(string);
