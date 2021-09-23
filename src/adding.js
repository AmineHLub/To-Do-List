import trippledotsicon from './assets/3dots.png';

class Todos {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

export default function addingNewTodos() {
  const previousData = JSON.parse(localStorage.getItem('storedTodos'));
  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  const toDo = document.createElement('input');
  const trippleDotsMenu = document.createElement('a');
  const trippleDotsMenuLogo = document.createElement('img');
  document.querySelector('.todo-list-activities > ul').appendChild(item);
  item.appendChild(checkbox);
  checkbox.classList.add('checkbox');
  item.id = previousData.length;
  checkbox.type = 'checkbox';
  item.appendChild(toDo);
  toDo.classList.add('list-items');
  toDo.classList.add('noborder-input');
  toDo.type = 'text';
  toDo.value = document.querySelector('.list-input > input').value;
  toDo.disabled = true; // must double click to modify
  item.appendChild(trippleDotsMenu);
  trippleDotsMenu.classList.add('list-menu');
  trippleDotsMenu.appendChild(trippleDotsMenuLogo);
  trippleDotsMenuLogo.src = trippledotsicon;
  previousData.push(new Todos(document.querySelector('.list-input > input').value, previousData.length));
  localStorage.setItem('storedTodos', JSON.stringify(previousData));
}