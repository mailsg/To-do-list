import saveArrayToLocalStorage from './saveArrayToLocalStorage.js';

const removeTask = (arr, index) => {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].index = i + 1;
    }
    saveArrayToLocalStorage(arr);
  }
};

export default removeTask;
