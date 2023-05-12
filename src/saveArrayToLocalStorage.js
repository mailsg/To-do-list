const updateIndex = (arr) => arr.map((obj, index) => ({
  ...obj,
  index: index + 1,
}));

const saveArrayToLocalStorage = (arr) => {
  const updatedArr = updateIndex(arr);
  localStorage.setItem('task', JSON.stringify(updatedArr));
};

export default saveArrayToLocalStorage;