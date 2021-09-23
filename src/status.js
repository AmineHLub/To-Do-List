import trippledotsicon from './assets/3dots.png';
import deleteIcon from './assets/delete.png';

export default function updater(number) {
  const previousData = JSON.parse(localStorage.getItem('storedTodos'));
  const defaultVal = previousData[number].completed;
  let nextVal;
  if (defaultVal === false) {
    nextVal = true;
    document.querySelector(`#\\${number + 30} > a > img`).src = deleteIcon;
  } else {
    nextVal = false;
    document.querySelector(`#\\${number + 30} > a > img`).src = trippledotsicon;
  }
  previousData[number].completed = nextVal;
  localStorage.setItem('storedTodos', JSON.stringify(previousData));
}