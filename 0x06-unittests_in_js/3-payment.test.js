const sinon = require('sinon');

const assert = require('assert');

const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    sandbox.spy(Utils, 'calculateNumber');
  });
  afterEach(() => {
    sandbox.restore();
  });
  it('should use Utill.calculateNumber', () => {
    sendPaymentRequestToApi(800, 1200);
    assert(Utils.calculateNumber.calledOnce);
  });
});
