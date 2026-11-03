class TodoList {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  listAllTasks() {
    return this.tasks;
  }

  addTask(taskTitle) {
    const newTask = {
      title: taskTitle,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  markAsCompeleted(taskTitle) {
    this.tasks.find((task) => task.title === taskTitle).completed = true;
  }
}

export { TodoList };
