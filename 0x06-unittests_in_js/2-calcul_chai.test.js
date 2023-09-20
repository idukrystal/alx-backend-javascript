expect = require('chai').expect;

calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type - SUM', () => {
    it(
      "returns correct result",
      () => expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6)
    );
  });
  describe('type - SUBTRACT', () => {
    it(
      "returns correct result",
      () => expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4)
    );
  })
  describe('type - DIVIDE', () => {
    it(
      "returns correct result - b not close to 0",
      () => expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2)
    );
    it(
      "returns correct result - b close to 0",
      () => expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error')
    );
  })
});
