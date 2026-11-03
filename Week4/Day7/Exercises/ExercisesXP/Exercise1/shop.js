const products = require("./products");

const searchProduct = (productName) => {
  return products.filter((item) => item.name === productName)[0];
};

const product1 = searchProduct("Backpack");
const product2 = searchProduct("Yoga Mat");
const product3 = searchProduct("Smartwatch");
console.log(product1);
console.log(product2);
console.log(product3);
