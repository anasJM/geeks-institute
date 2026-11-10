const express = require("express");
const router = require("./routes/index.js");

const app = express();
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
