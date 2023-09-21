const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');

const { it, describe } = require("mocha");

const Utils = require('./utils');

const assert = require('assert');

describe('sendPaymentRequestToApi', () => {

  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    sandbox.spy(Utils, "calculateNumber");
  });
  afterEach(() => {
    sandbox.restore();
  });
  it("should use Utill.calculateNumber", () => {
    sendPaymentRequestToApi(800, 1200);
    assert(Utils.calculateNumber.calledOnce);
  })
})
