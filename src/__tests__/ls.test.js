const FakeLocalStorage = require('../__mocks__/ls.js');

const localStorage = new FakeLocalStorage();

localStorage.setItem([1, 2, 3]);

test('localStorage doesnt work!', () => {
  expect(localStorage.getItem().length).toEqual(3);
});