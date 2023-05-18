import {
  editTask, clearTask, updateTask, tasks,
} from './rest.js';

describe('edit, update, and clear tasks', () => {
  test('clearTask should remove completed tasks', () => {
    tasks[1].completed = true;

    const NewTasks = clearTask();

    expect(NewTasks.length).toBe(2);
    expect(NewTasks[0].taskDesc).toBe('Learn HTML');
    expect(NewTasks[1].taskDesc).toBe('Learn JavaScript');
  });

  test('editTask should update the task description', () => {
    const editedTask = {
      id: 1,
      taskDesc: 'Clean the house',
      completed: false,
    };

    editTask(editedTask);

    expect(tasks[0].taskDesc).toBe('Clean the house');
  });

  test('updateTask should mark a task as completed', () => {
    const taskId = 2;

    const updatedTask = updateTask(taskId);

    expect(updatedTask.completed).toBe(true);
  });
});
