// ------------EX1------------
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(`result: ${result}`))
  .catch((error) => console.log("Error!!"));

// Explanation: all the promises is fullfilled the Promise.all() is returning an array of promises values [3, 42, "foo"], if Promise.all() get a single rejected promise it will catch the error

// ------------EX2------------
function timesTwoAsync(x) {
  return new Promise((resolve) => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr).then((result) => {
  console.log(result);
});

// output: [2, 4, 6]
