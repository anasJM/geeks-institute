const axios = require("axios");

const getAxiosData = async (url) => {
  const products = await axios.get(url);
  return products.data;
};

const displayAxiosData = (url) => {
  getAxiosData(url).then((products) => {
    products.forEach((product) => {
      console.log(product.title);
    });
  });
};

module.exports = {
  displayAxiosData,
};
