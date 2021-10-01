const Ls = require('./ls.js');

const localstorage = new Ls();

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

localstorage.setItem(dummyArrofTodos);

function updater(number) {
  const prevData = localstorage.getItem();
  const defaultVal = prevData[number].completed;
  let nextVal;
  if (defaultVal === false) {
    nextVal = true;
  } else {
    nextVal = false;
  }
  prevData[number].completed = nextVal;
  localstorage.setItem(prevData);
  return nextVal;
}

module.exports = updater;