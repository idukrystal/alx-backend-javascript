assert = require('assert');

calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type - SUM', () => {
    it(
      "returns correct result",
      () => assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    );
  });
  describe('type - SUBTRACT', () => {
    it(
      "returns correct result",
      () => assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    );
  })
  describe('type - DIVIDE', () => {
    it(
      "returns correct result - b not close to 0",
      () => assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    );
    it(
      "returns correct result - b close to 0",
      () => assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    );
  })
});
