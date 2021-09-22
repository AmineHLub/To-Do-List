import './style.css';
import trippledotsicon from './assets/3dots.png';

const arrOftodos = [
  {
    description: 'template1',
    completed: false,
    index: 0,
  },
  {
    description: 'template2',
    completed: false,
    index: 1,
  },
  {
    description: 'template3',
    completed: false,
    index: 2,
  },
  {
    description: 'template4',
    completed: false,
    index: 3,
  },
];

for (let i = 0; i < arrOftodos.length; i += 1) {
  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  const toDo = document.createElement('input');
  const trippleDotsMenu = document.createElement('a');
  const trippleDotsMenuLogo = document.createElement('img');
  document.querySelector('.todo-list-activities > ul').appendChild(item);
  item.appendChild(checkbox);
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';
  item.appendChild(toDo);
  toDo.classList.add('list-items');
  toDo.classList.add('noborder-input');
  toDo.type = 'text';
  toDo.value = arrOftodos[i].description;
  toDo.disabled = true; // must double click to modify
  item.appendChild(trippleDotsMenu);
  trippleDotsMenu.classList.add('list-menu');
  trippleDotsMenu.appendChild(trippleDotsMenuLogo);
  trippleDotsMenuLogo.src = trippledotsicon;
}
