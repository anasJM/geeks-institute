const express = require("express");
const bookController = require("../controllers/book.js");
const router = express.Router();

// Get all todos
router.get("/", bookController.getAllBooks);

// Get todo
router.get("/:id", bookController.getBook);

router.post("/", bookController.createBook);

router.put("/:id", bookController.updateBook);

router.delete("/:id", bookController.deleteBook);

module.exports = router;
