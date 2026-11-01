// 1
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const newArray = array.map((item) => {
  if (Array.isArray(item) && Array.isArray(item[0])) {
    return item.flat(Infinity);
  } else {
    return item[0];
  }
});

console.log(newArray);

// 2
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

console.log(greeting.map((item) => item.join(" ")));
// 3
console.log(greeting.map((item) => item.join(" ")).join(" "));
// 4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));
