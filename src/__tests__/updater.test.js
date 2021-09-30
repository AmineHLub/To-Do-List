const updateValue = require('../__mocks__/updatermock.js');

test('check DOM manipulation', () => {
  expect(updateValue(0, 'test')).toBe('test');
})