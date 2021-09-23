export default function removeAll() {
  const lists = document.querySelectorAll('.todo-list-activities > ul > li');
  const arrToRemove = [];
  const previousData = JSON.parse(localStorage.getItem('storedTodos'));
  for (let i = 0; i < lists.length; i += 1) {
    if (document.querySelectorAll('.todo-list-activities > ul > li > .checkbox')[i].checked === true) {
      arrToRemove.push(previousData[i]);
    }
  }
  const RemovedArray = previousData.filter((item) => !arrToRemove.includes(item));
  for (let i = 0; i < RemovedArray.length; i += 1) {
    RemovedArray[i].index = i;
  }
  localStorage.setItem('storedTodos', JSON.stringify(RemovedArray));
  window.location.reload();
}