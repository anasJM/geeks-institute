const express = require("express");
const posts = require("../data.js");
const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.json(posts);
});

postRouter.get("/:postID", (req, res) => {
  const postID = Number(req.params.postID);
  const result = posts.find((post) => post.id === postID);
  if (!result) {
    return res.status(404).send("Post not found!");
  }
  res.json(result);
});

postRouter.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

postRouter.put("/:postID", (req, res) => {
  const postID = Number(req.params.postID);
  const postIndex = posts.findIndex((post) => post.id === postID);
  if (postIndex === -1) {
    return res.status(404).json("Post to update not found!");
  }
  const title = req.body.title;
  const content = req.body.content;
  const updatedPost = {
    id: postID,
    title,
    content,
  };
  posts[postIndex] = updatedPost;
  res.status(200).json("Product updated");
});

postRouter.delete("/:postID", (req, res) => {
  const postID = Number(req.params.postID);
  const postIndex = posts.findIndex((post) => post.id === postID);
  if (postIndex === -1) {
    return res.status(404).json("Post to delete not found!");
  }
  posts.splice(postIndex, 1);
  res.status(200).json("Product deleted");
});

module.exports = postRouter;
