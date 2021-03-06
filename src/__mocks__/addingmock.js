const FakeLocalStorage = require('./ls.js');
const page = require('./mockhtml.js');

const fakeLocalStorage = new FakeLocalStorage();

class Todos {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

function addingNewTodos(mockval) {
  const previousData = fakeLocalStorage.getItem();
  previousData.push(new Todos(mockval, previousData.length));
  fakeLocalStorage.setItem(previousData);
  const fakeDiv = page.window.document.createElement('div');
  page.window.document.body.appendChild(fakeDiv);
  fakeDiv.innerText = `${fakeLocalStorage.getItem()[0].completed}`;
  fakeDiv.id = fakeLocalStorage.getItem()[0].index;
  return fakeLocalStorage.getItem();
}

module.exports = addingNewTodos;