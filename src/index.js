import './style.css';
import updater from './status.js';
import addingNewTodos from './adding.js';
import getData from './getData.js';

getData();

document.querySelector('.list-input > input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addingNewTodos();
    document.getElementById(`${JSON.parse(localStorage.getItem('storedTodos')).length - 1}`).addEventListener('change', updater.bind(null, JSON.parse(localStorage.getItem('storedTodos')).length - 1), false);
  }
});

for (let i = 0; i < JSON.parse(localStorage.getItem('storedTodos')).length; i += 1) {
  document.getElementById(`${i}`).addEventListener('change', updater.bind(null, i), false);
}
