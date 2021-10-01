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

fakeLocalStorage.setItem(dummyArrofTodos);

function removeOrDrug(number) {
  if (pageDel.window.document.querySelectorAll('body > div > ul > li> .checkbox')[number].checked === true) {
    pageDel.window.document.querySelector(`#\\${number + 30}`).remove();
    const previousData = fakeLocalStorage.getItem();
    previousData.splice(number, 1);
    for (let i = 0; i < previousData.length; i += 1) {
      previousData[i].index = i;
    }
    fakeLocalStorage.setItem(previousData);
  }
  const arrOfReturnedValues = [pageDel.window.document.querySelectorAll('body > div > ul > li').length,
    fakeLocalStorage.getItem().length];
  return arrOfReturnedValues;
}

module.exports = removeOrDrug;