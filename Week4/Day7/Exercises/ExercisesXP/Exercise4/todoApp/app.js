import { TodoList } from "./todo.js";

const tasks = [
  {
    title: "Buy groceries",
    completed: false,
  },
  {
    title: "Finish JavaScript assignment",
    completed: false,
  },
  {
    title: "Clean the workspace",
    completed: false,
  },
  {
    title: "Read 20 pages of a book",
    completed: false,
  },
  {
    title: "Schedule doctor appointment",
    completed: true,
  },
];

const myTodoList = new TodoList(tasks);
myTodoList.markAsCompeleted("Buy groceries");
myTodoList.addTask("Buy baby milk");
console.log(myTodoList.listAllTasks());
