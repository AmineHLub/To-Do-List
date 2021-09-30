const updater = require('../__mocks__/statusmock.js');

test('check if it is true', () => {
  expect(updater(0)).toBe(false);
})

test('check if it is false', () => {
  expect(updater(1)).toBe(true);
})