const axios = require("axios");

const fetchPosts = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

module.exports = fetchPosts;
