const removeOrDrug = require('../__mocks__/mockdeleteSingle.js');

test('Removing one unchecked element has got something deleted', () => {
  expect(removeOrDrug(1)).toEqual([3, 3]);
  // [htmlnode.length, localstorage.length]
});

test('Removing one checked element was not successful', () => {
  expect(removeOrDrug(0)).toEqual([2, 2]);
  // [htmlnode.length, localstorage.length]
});
