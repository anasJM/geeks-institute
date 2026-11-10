const express = require("express");
const todoController = require("../controllers/todo.js");
const router = express.Router();

// Get all todos
router.get("/", todoController.getAlltodos);

// Get todo
router.get("/:id", todoController.getTodo);

router.post("/", todoController.createTodo);

router.put("/:id", todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
