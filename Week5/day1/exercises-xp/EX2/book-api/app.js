const express = require("express");
const books = require("./data.js");

const app = express();
// parse json body content
app.use(express.json());

// start
app.listen("5000", () => {
  console.log("Server is listening on port 5000");
});

// GET all books
app.get("/api/books", (req, res) => {
  if (books) {
    res.json(books);
  } else {
    res.status(404).json("Books not found!");
  }
});

// GET book
app.get("/api/books/:bookID", (req, res) => {
  const bookID = Number(req.params.bookID);
  const book = books.find((book) => book.id === bookID);
  if (!book) {
    return res.status(404).json("Book not found!");
  }
  res.status(200).json(book);
});

// POST create book
app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    genre: req.body.genre,
  };
  books.push(newBook);
  res.status(201).json("Book created!");
});
