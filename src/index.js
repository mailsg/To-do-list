/* eslint-disable no-use-before-define */
import './style.css';

const tasks = [
  {
    description: 'Learn HTML',
    completed: false,
    index: 2,
  },
  {
    description: 'Learn CSS',
    completed: false,
    index: 1,
  },
  {
    description: 'Learn JavaScript',
    completed: false,
    index: 0,
  },
];

const viewTasks = () => {
  const container = document.querySelector('.todo-list-placeholder');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<input class="check-box" type="checkbox">${task.description}`;
    container.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  viewTasks();
});