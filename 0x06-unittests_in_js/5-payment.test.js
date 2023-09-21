const sinon = require('sinon');

const assert = require('assert');

const sendPaymentRequestToApi = require('./5-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() =>  {
    sinon.spy(console, 'log');
  });
  afterEach(() => {
    console.log.restore();
  })
  it('is tested with 100 120', () => {
    sendPaymentRequestToApi(100, 20);
    assert(console.log.withArgs('The total is: 120').calledOnce);
  });
  it('is tested with 10 10', () => {
    sendPaymentRequestToApi(10, 10);
    assert(console.log.withArgs('The total is: 20').calledOnce);
  });
});
