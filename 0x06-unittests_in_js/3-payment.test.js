const sinon = require('sinon');

const assert = require('assert');

const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utill.calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledOnce);
    spy.restore();
  });
});
