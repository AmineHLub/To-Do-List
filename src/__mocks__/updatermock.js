const ls = require('./ls.js');
const updaterPage = require('./mockhtmlToDelete.js');

const localstorage = new ls();

// dummyArroftodos
const dummyArrofTodos = [
  {
    description: 'dummy todo 1',
    completed: true,
    index: 0,
  },
  {
    description: 'dummy todo 2',
    completed: false,
    index: 1,
  },
  {
    description: 'dummy todo 3',
    completed: true,
    index: 2,
  },
];
// store the array in fake localstorage
localstorage.setItem(dummyArrofTodos);

function updateValue(number, desc) {
  const previousData = localstorage.getItem();
  previousData[number].description = desc;
  updaterPage.window.document.querySelectorAll('.list-items')[number].value = desc;
  localstorage.setItem(previousData);
  return updaterPage.window.document.querySelectorAll('.list-items')[number].value;
}

module.exports = updateValue;