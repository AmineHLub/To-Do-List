const FakeLocalStorage = require('./ls.js');
const pageDel = require('./mockhtmlToDelete.js');

const fakeLocalStorage = new FakeLocalStorage();

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
fakeLocalStorage.setItem(dummyArrofTodos);

function removeAll() {
  const lists = pageDel.window.document.querySelectorAll('body > div > ul > li');
  const arrToRemove = [];
  const previousData = fakeLocalStorage.getItem();
  for (let i = 0; i < lists.length; i += 1) {
    if (pageDel.window.document.querySelectorAll('body > div > ul > li > .checkbox')[i].checked === true) {
      arrToRemove.push(previousData[i]);
    }
  }
  const RemovedArray = previousData.filter((item) => !arrToRemove.includes(item));
  for (let i = 0; i < RemovedArray.length; i += 1) {
    RemovedArray[i].index = i;
  }
  fakeLocalStorage.setItem(RemovedArray);
  return (fakeLocalStorage.getItem().length);
}

module.exports = removeAll;