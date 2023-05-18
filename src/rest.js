let tasks = [
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
  if (selectedTask) {
    selectedTask.task = task;
    return selectedTask; 
  }
};

const clearTask = () => {
  tasks = tasks.filter((task) => !task.completed);
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
  updateTask
};
