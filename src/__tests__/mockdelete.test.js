const removeAll = require('../__mocks__/mockdelete.js');

describe('Test (All)removing functions', () => {
  test('Removing according to dummyArr 2 false status did not work', () => {
    expect(removeAll()).toBe(1);
  });
});
