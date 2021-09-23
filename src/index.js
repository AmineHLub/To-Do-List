import './style.css';
import getData from './getData.js';
import updater from './status.js';
import addingNewTodos from './adding.js';
import updaterInput from './updater.js';

getData();

document.querySelector('.list-input > input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addingNewTodos();
    document.querySelector(`#\\${JSON.parse(localStorage.getItem('storedTodos')).length - 1 + 30} > .checkbox`).addEventListener('change', updater.bind(null, JSON.parse(localStorage.getItem('storedTodos')).length - 1), false);
  }
});

for (let i = 0; i < JSON.parse(localStorage.getItem('storedTodos')).length; i += 1) {
  document.querySelector(`#\\${i + 30} > .checkbox`).addEventListener('change', updater.bind(null, i), false);
  document.querySelector(`#\\${i + 30} > .list-items`).addEventListener('click', updaterInput.bind(null, i + 30), false);
}