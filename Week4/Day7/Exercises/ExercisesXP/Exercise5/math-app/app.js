const _ = require("lodash");
const { add, multiply } = require("./math");

console.log(add(4, 5));
console.log(multiply(4, 5));

console.log(_.add(4, 5));
console.log(_.multiply(4, 5));
