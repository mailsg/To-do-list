import saveArrayToLocalStorage from './saveArrayToLocalStorage.js';

export default function clearCompletedTask(arr) {
  const filterArr = arr.filter((obj) => !obj.completed);
  saveArrayToLocalStorage(filterArr);
}
