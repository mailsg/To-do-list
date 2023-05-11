const form = document.querySelector('form');
const input = document.querySelector('.placeholder');

const addNewTask = (arr, item) => {
  const task = {
    item,
    completed: false,
    index: arr.length + 1,
  };
  arr.push(task);
  localStorage.setItem('task', JSON.stringify(arr));
};

export { addNewTask, form, input };