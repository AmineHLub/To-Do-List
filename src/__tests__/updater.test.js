const updateValue = require('../__mocks__/updatermock.js');

describe('Check dom + localstorage updating', () => {
  test('check DOM manipulation', () => {
    expect(updateValue(0, 'test')).toBe('test');
  });
});
