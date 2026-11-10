const express = require("express");
const bookRouter = require("./routes/book.js");

const app = express();

app.use(express.json());
app.use("/books", bookRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
