import trippledotsicon from './assets/3dots.png';
import deleteIcon from './assets/delete.png';

export default function getData() {
  let arrOftodos = [];

  const previousData = JSON.parse(localStorage.getItem('storedTodos'));

  if (!previousData) {
    localStorage.setItem('storedTodos', JSON.stringify(arrOftodos));
  } else {
    arrOftodos = previousData;
  }

  for (let i = 0; i < arrOftodos.length; i += 1) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    const toDo = document.createElement('input');
    const trippleDotsMenu = document.createElement('a');
    const trippleDotsMenuLogo = document.createElement('img');
    document.querySelector('.todo-list-activities > ul').appendChild(item);
    item.appendChild(checkbox);
    checkbox.classList.add('checkbox');
    item.id = arrOftodos[i].index;
    checkbox.type = 'checkbox';
    item.appendChild(toDo);
    toDo.classList.add('list-items');
    toDo.classList.add('noborder-input');
    toDo.type = 'text';
    toDo.value = arrOftodos[i].description;
    toDo.readOnly = true; // must double click to modify
    item.appendChild(trippleDotsMenu);
    trippleDotsMenu.classList.add('list-menu');
    trippleDotsMenu.appendChild(trippleDotsMenuLogo);
    trippleDotsMenuLogo.src = trippledotsicon;
    if (arrOftodos[i].completed === true) {
      checkbox.checked = true;
      document.querySelector(`#\\${i + 30} > a > img`).src = deleteIcon;
    }
  }
}