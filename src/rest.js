const tasks = [
  {
    id: 1,
    taskDesc: 'Learn HTML',
    completed: false,
  },
  {
    id: 2,
    taskDesc: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    taskDesc: 'Learn JavaScript',
    completed: false,
  },
];

const editTask = (item) => {
  const { id, taskDesc } = item;
  const selectedTask = tasks.find((instance) => instance.id === id);

  selectedTask.taskDesc = taskDesc;
};

const clearTask = () => {
  const Newtasks = tasks.filter((task) => !task.completed);
  return Newtasks;
};

const updateTask = (taskId) => {
  const taskToUpdate = tasks.find((task) => task.id === taskId);
  if (taskToUpdate) {
    taskToUpdate.completed = true;
  }
  return taskToUpdate;
};

module.exports = {
  editTask,
  clearTask,
  updateTask,
  tasks,
};
