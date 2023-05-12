/* eslint-disable no-use-before-define */

import './style.css';
import saveArrayToLocalStorage from './saveArrayToLocalStorage.js';
import clearCompletedTask from './clearCompletedTask.js';
import removeTask from './removeTask.js';
import { addNewTask, form, input } from './addTask.js';

const placeholder = document.querySelector('ul');
const clearCompleted = document.querySelector('[data-clear]');
const data = JSON.parse(localStorage.getItem('task'));
if (!data) localStorage.setItem('task', '[]');

const getTask = () => JSON.parse(localStorage.getItem('task')) || [];

form.addEventListener('submit', () => {
  const simpleTodoTasks = getTask();
  addNewTask(simpleTodoTasks, input.value);
  populateTask();
  input.value = '';
});

const removeList = (event) => {
  const simpleTodoTasks = getTask();
  const li = event.target.closest('li');
  const id = li.getAttribute('data-id');
  removeTask(simpleTodoTasks, id);
  populateTask();
};

clearCompleted.addEventListener('click', () => {
  const simpleTodoTasks = getTask();
  clearCompletedTask(simpleTodoTasks);
  populateTask();
});

const populateTask = () => {
  const arr = getTask();
  placeholder.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const taskDetails = arr[i];
    const taskHolder = document.createElement('li');
    taskHolder.setAttribute('data-id', i);
    taskHolder.className = 'task-container';
    taskHolder.innerHTML = `<input class='task-content' id='check-${i}' type='checkbox' data-check>
    <span class='task-content description'>${taskDetails.item}</span><input class='edit hide' value=${taskDetails.item}>
    <span class='task-content index'></i></span>`;

    const removeButton = document.createElement('i');
    removeButton.className = 'fa';
    removeButton.classList.add('fa-trash');
    removeButton.addEventListener('click', removeList);

    const editButton = document.createElement('i');
    editButton.className = 'fa';
    editButton.classList.add('fa-pencil');
    taskHolder.appendChild(editButton);
    taskHolder.appendChild(removeButton);
    placeholder.appendChild(taskHolder);

    editButton.addEventListener('click', editTask);

    const checkbox = document.getElementById(`check-${i}`);
    checkbox.addEventListener('change', change);
    if (taskDetails.completed) {
      checkbox.nextSibling.classList.add('strike');
      checkbox.setAttribute('checked', '');
    }
  }
};

const editTask = (event) => {
  const li = event.target.closest('li');
  li.style.backgroundColor = 'rgb(246, 204, 204)';
  const id = li.getAttribute('data-id');
  const description = li.children[1];
  const input = li.children[2];
  input.value = description.textContent;
  const closeTask = li.children[5];
  event.target.style.display = 'none';
  closeTask.style.marginRight = '1rem';
  description.style.display = 'none';
  input.classList.toggle('hide', false);
  input.focus();
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const simpleTodoTasks = getTask();
      simpleTodoTasks[id].item = input.value;
      saveArrayToLocalStorage(simpleTodoTasks);
      populateTask();
    }
  });
};

const change = (e) => {
  const checkbox = e.target;
  const li = checkbox.closest('li');
  const id = parseInt(li.getAttribute('data-id'), 10);
  const simpleTodoTasks = getTask();
  if (checkbox.checked) {
    li.classList.add('strike');
    simpleTodoTasks[id].completed = true;
  } else {
    li.classList.remove('strike');
    simpleTodoTasks[id].completed = false;
  }
  localStorage.setItem('task', JSON.stringify(simpleTodoTasks));
};

populateTask();