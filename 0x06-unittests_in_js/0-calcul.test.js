assert = require('assert');

calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it(
    "returns correct result",
    () => assert.equal(calculateNumber(5.2, 3.6), 9)
  )
});