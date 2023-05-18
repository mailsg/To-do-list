const tasks = [];

const taskManager = {
  addNewTask: (task) => {
    tasks.push(task);
    return tasks;
  },

  removeTaskById: (id) => {
    const tasksLeft = tasks.filter((task) => task.id !== id);
    tasksLeft.forEach((task, index) => {
      task.id = index + 1;
    });
    return tasksLeft;
  },
};

export default taskManager;
