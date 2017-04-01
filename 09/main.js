var expect = require('expect');
var deepFreeze = require('deep-freeze');
const addCounter = (list) => {
  return [...list, 0];          // es6 style
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All Tests passed');
