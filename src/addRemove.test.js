import taskManager from './addRemove.js';

describe('taskManager', () => {
  test('should add items to tasks based on user actions', () => {
    const tasks = taskManager.addNewTask({
      task: 'Task 1',
      id: 1,
      status: false,
    });
    expect(tasks).not.toStrictEqual([]);
  });

  test('should remove appropriate task upon user actions', () => {
    expect(
      taskManager.removeTaskById(1),
    ).toStrictEqual([]);
  });
});