Utils = require('./utils')

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  total = Utils.calculateNumber(type = "SUM", a = totalAmount, b = totalShipping);
  console.log(`The total is: ${total}`)
}

module.exports = sendPaymentRequestToApi
