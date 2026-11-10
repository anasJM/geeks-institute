const express = require("express");
const fetchPosts = require("./data/dataService.js");
const app = express();

app.listen(5000, () => {
  console.log("Server is listening on the port 5000");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(`Error: ${error}`);
  }
});
