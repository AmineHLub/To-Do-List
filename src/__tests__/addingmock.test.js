const addingNewTodos = require('../__mocks__/addingmock.js');
const page = require('../__mocks__/mockhtml.js');

test('Adding doesnt work!', () => {
  expect(addingNewTodos(page.window.document.querySelector('body > div > input').value)[0].description)
    .toBe('test');
});

test('Adding to html doesnt work!', () => {
  addingNewTodos('anyval');
  expect(page.window.document.querySelectorAll('body > div')[1].innerText)
    .toBe('false');
  expect(page.window.document.querySelectorAll('body > div')[1].id)
    .toEqual('0');
});