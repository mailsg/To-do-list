import { editTask, clearTask, updateTask } from './rest.js';

describe('edit, update, and clear tasks', () => {
    let tasks;
  
    beforeEach(() => {
      tasks = [
        {
          id: 1,
          task: 'Learn HTML',
          completed: false,
        },
        {
          id: 2,
          task: 'Learn CSS',
          completed: false,
        },
        {
          id: 3,
          task: 'Learn JavaScript',
          completed: false,
        },
      ];
    });
  
    test('editTask should update the task description', () => {
      const editedTask = {
        id: 1,
        task: 'Clean the house',
        completed: false,
      };
  
      editTask(editedTask);
  
      expect(tasks[0].task).toBe('Clean the house');
    });
  
    test('updateTask should mark a task as completed', () => {
      const taskId = 2;
  
      const updatedTask = updateTask(taskId);
  
      expect(updatedTask.completed).toBe(true);
    });
  
    test('clearTask should remove completed tasks', () => {
      tasks[1].completed = true;
      
      clearTask();
      
      expect(tasks.length).toBe(2);
      expect(tasks[0].task).toBe('Learn HTML');
      expect(tasks[1].task).toBe('Learn JavaScript');
    });
      
      
  });
  
  