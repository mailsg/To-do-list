import taskManager from './addRemove.js';

describe('taskManager', () => {
  describe('adding function test unit', () => {
    test('should add items to tasks based on user actions', () => {
      const tasks = taskManager.addNewTask({
        task: 'Task 1',
        id: 1,
        status: false,
      });
      expect(tasks).not.toStrictEqual([]);
    });
  });

  describe('subtraction function test unit', () => {
    test('should remove appropriate task upon user actions', () => {
      expect(
        taskManager.removeTaskById(1),
      ).toStrictEqual([]);
    });
  });
});