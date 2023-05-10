/* eslint-disable no-use-before-define */

import './style.css';
import { addTask, form, input } from './addTask.js';
import removeTask from './removeTask.js';

const placeholder = document.querySelector('ul');
const simpleTodoTasks = JSON.parse(localStorage.getItem('task')) || [];

const populateTask = (arr) => {
  localStorage.setItem('task', JSON.stringify(arr));
  placeholder.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskHolder = document.createElement('li');
    taskHolder.setAttribute('data-id', i);
    taskHolder.className = 'task-container';
    taskHolder.innerHTML = `<input class='task-content' type='checkbox' data-check>
    <span class='task-content description'>${taskDetails.item}</span><input class='edit hide'>
    <span class='task-content index'></span>`;

    const editButton = document.createElement('i');
    editButton.className = 'fa';
    editButton.classList.add('fa-pencil');
    taskHolder.appendChild(editButton);

    const removeButton = document.createElement('i');
    removeButton.className = 'fa';
    removeButton.classList.add('fa-trash');
    removeButton.addEventListener('click', removeList);

    taskHolder.appendChild(removeButton);
    placeholder.appendChild(taskHolder);

    editButton.addEventListener('click', editTask);
  }
};

const removeList = (event) => {
  const li = event.target.closest('li');
  const id = li.getAttribute('data-id');
  removeTask(simpleTodoTasks, id);
  simpleTodoTasks.forEach((obj, id) => { obj.index = id + 1; });
  populateTask(simpleTodoTasks);
};

const editTask = (event) => {
  const li = event.target.closest('li');
  li.style.backgroundColor = 'rgb(246, 204, 204)';
  const id = li.getAttribute('data-id');
  const description = li.children[1];
  const input = li.children[2];
  input.value = description.textContent;
  const closeTask = li.children[5];
  event.target.display = 'none';
  closeTask.style.marginRight = '1rem';
  description.style.display = 'none';
  input.classList.toggle('hide', false);
  input.focus();
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      simpleTodoTasks[id].item = input.value;
      populateTask(simpleTodoTasks);
    }
  });
};

populateTask(simpleTodoTasks);

form.addEventListener('submit', () => {
  addTask(simpleTodoTasks, input.value);
  populateTask(simpleTodoTasks);
  input.value = '';
});
