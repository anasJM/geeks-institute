const express = require("express");
const postRouter = require("./routes/post.js");

const app = express();
// parse json body content
app.use(express.json());
// router
app.use("/posts", postRouter);

// start
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
