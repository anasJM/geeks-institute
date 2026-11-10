const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome back, Home page");
});

router.get("/about", (req, res) => {
  res.status(200).send("About page");
});

module.exports = router;
