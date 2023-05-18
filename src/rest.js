const tasks = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: false
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: false
  },
  {
    id: 3,
    task: 'Learn JavaScript',
    completed: false
  }
];

const editTask = (item) => {
  const { id, task } = item;
  const selectedTask = tasks.find((task) => task.id === id);
  selectedTask.task = task;
};

const clearTask = () => {
  const remainingTasks = tasks.filter((task) => !task.completed);
  remainingTasks.forEach((task, index) => {
    task.id = index + 1;
  });
  return remainingTasks;
};

const updateTask = (id, completed) => {
  const selectedTask = tasks.find((task) => task.id === id);
  selectedTask.completed = completed;
  return selectedTask;
};

module.exports = {
  editTask,
  clearTask,
  updateTask
};
