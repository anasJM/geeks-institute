const todos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", completed: true },
  { id: 3, title: "Finish Express homework", completed: false },
  { id: 4, title: "Read a chapter of a book", completed: false },
  { id: 5, title: "Water the plants", completed: true },
  { id: 6, title: "Write a blog post", completed: false },
  { id: 7, title: "Clean the workspace", completed: false },
  { id: 8, title: "Do laundry", completed: true },
  { id: 9, title: "Exercise for 30 minutes", completed: false },
  { id: 10, title: "Review JavaScript array methods", completed: true },
];

function getAlltodos(req, res) {
  res.status(200).json(todos);
}

function getTodo(req, res) {
  const todoId = Number(req.params.id);
  const result = todos.find((todo) => todo.id === todoId);
  if (!result) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.status(200).json(result);
}

function createTodo(req, res) {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed,
  };
  todos.push(todo);
  res.status(200).json(todo);
}

function updateTodo(req, res) {
  const todoId = Number(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex == -1) {
    return res.status(404).json({ error: "Todo not found!" });
  }
  todos[todoIndex].title = req.body.title;
  todos[todoIndex].completed = req.body.completed;
  res.status(200).json(todos[todoIndex]);
}

function deleteTodo(req, res) {
  const todoId = Number(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex == -1) {
    return res.status(404).json({ error: "Todo not found!" });
  }
  todos.splice(todoIndex, 1);
  res.status(200).json({ success: "todo deleted" });
}

module.exports = {
  getAlltodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
