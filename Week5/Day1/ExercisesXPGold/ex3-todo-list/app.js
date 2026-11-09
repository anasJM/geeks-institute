const express = require("express");
const crypto = require("crypto");

const app = express();

// parsing data from body
app.use(express.json());

// server listening
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// todo list
const todos = [
  {
    id: crypto.randomUUID(),
    title: "title 1",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: "title 2",
    completed: true,
  },
  {
    id: crypto.randomUUID(),
    title: "title 3",
    completed: false,
  },
];

// GET all todos
app.get("/api/todos", (req, res) => {
  res.status(200).json(todos);
});

// GET todo by id
app.get("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  if (!todoId) {
    return res.status(400).json({ error: "Todo ID is missing!" });
  }
  const todo = todos.find((todo) => todo.id == todoId);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found!" });
  }
  res.status(200).json(todo);
});

// POST todo
app.post("/api/todos", (req, res) => {
  if (!req.body.title || !req.body.completed) {
    return res.status(400).json({ error: "'title' or 'completed' is missing" });
  }
  const todo = {
    id: crypto.randomUUID(),
    title: req.body.title,
    completed: req.body.completed,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT update todo
app.put("/api/todos/:todoId", (req, res) => {
  if (!req.body.title || req.body.completed == null) {
    return res
      .status(400)
      .json({ error: "'title' or 'completed' attributes is missing" });
  }
  if (!req.params.todoId) {
    return res.status(400).json({ error: "todo ID is missing!" });
  }
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo Not found" });
  }
  todos[todoIndex].title = req.body.title;
  todos[todoIndex].completed = req.body.completed;
  res.status(200).json(todos[todoIndex]);
});

// DELETE delete todo
app.delete("/api/todos/:todoId", (req, res) => {
  if (!req.params.todoId) {
    return res.status(400).json({ error: "todo ID is missing!" });
  }
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo Not found" });
  }

  todos.splice(todoIndex, 1);
  res.status(200).json(todos[todoIndex]);
});
