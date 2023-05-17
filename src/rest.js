const tasks = [
  {
    id:1,
    taskDescription:'task1',
    completed: false
  },
  {
    id:2,
    taskDescription:'task2',
    completed: false
  },
  {
    id:3,
    taskDescription:'task3',
    completed: false
  }
]

const editTask = (task) => {
  const foundTask = tasks.find((element) => element.includes(task.id));

  foundTask.taskDescription = task.taskDescription;
  return foundTask.taskDescription;
}

console.log(editTask({id:3,taskDescription:'task changed',completed:false}));