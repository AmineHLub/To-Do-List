import './style.css';
import getData from './getData.js';
import updater from './status.js';
import addingNewTodos from './adding.js';
import updaterInput from './updater.js';
import removeOrDrug from './singleDeleteAndDrug.js';
import removeAll from './removeAll.js';

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
  document.querySelector(`#\\${i + 30} > .list-menu`).addEventListener('click', removeOrDrug.bind(null, i + 30), false);
}

document.querySelector('.clear-button > button').addEventListener('click', removeAll);