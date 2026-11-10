const books = [
  { id: 1, title: "The Alchemist" },
  { id: 2, title: "Clean Code" },
  { id: 3, title: "Atomic Habits" },
  { id: 4, title: "Eloquent JavaScript" },
  { id: 5, title: "To Kill a Mockingbird" },
  { id: 6, title: "1984" },
  { id: 7, title: "The Great Gatsby" },
  { id: 8, title: "Design Patterns" },
  { id: 9, title: "You Don't Know JS" },
  { id: 10, title: "Pride and Prejudice" },
];

function getAllBooks(req, res) {
  res.status(200).json(books);
}

function getBook(req, res) {
  const bookId = Number(req.params.id);
  const result = books.find((book) => book.id === bookId);
  if (!result) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(result);
}

function createBook(req, res) {
  const book = {
    id: books.length + 1,
    title: req.body.title,
  };
  books.push(book);
  res.status(200).json(book);
}

function updateBook(req, res) {
  const bookId = Number(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex == -1) {
    return res.status(404).json({ error: "Book not found!" });
  }
  books[bookIndex].title = req.body.title;
  books[bookIndex].completed = req.body.completed;
  res.status(200).json(books[bookIndex]);
}

function deleteBook(req, res) {
  const bookId = Number(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex == -1) {
    return res.status(404).json({ error: "Book not found!" });
  }
  books.splice(bookIndex, 1);
  res.status(200).json({ success: "book deleted" });
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
