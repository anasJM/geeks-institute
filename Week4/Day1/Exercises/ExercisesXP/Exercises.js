// ------------EX1------------
const compareToTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(num);
    } else {
      reject("rejected");
    }
  });
};

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// ------------EX2------------
setTimeout(() => {
  Promise.resolve("Success");
}, 4000);

// ------------EX3------------
Promise.resolve(3).then((result) => console.log(`Result: ${result}`));
Promise.reject("Boo!").catch((error) => console.log(`Error: ${error}`));
