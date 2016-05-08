// payslip.js
// ========
var tools = require('./tools');
module.exports = {
  newPayslip: function(req, res, amount, grossAmount, netAmount, incomeTax, pension, pensionAmount, medicare, medicareAmount, medicareCredit, taxBand) {
    var newPayslip = {}
    newPayslip.firstName = req.firstName
    newPayslip.lastName = req.lastName
    newPayslip.period = tools.getPeriod(req.period)
    newPayslip.amount = amount
    newPayslip.grossAmount = grossAmount
    newPayslip.netAmount = netAmount
    newPayslip.incomeTax = incomeTax
    newPayslip.pension = pension + "%"
    newPayslip.pensionAmount = pensionAmount
    newPayslip.medicare = medicare
    newPayslip.medicareAmount = medicareAmount
    newPayslip.medicareCredit = medicareCredit
    newPayslip.taxBand = taxBand
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(newPayslip))
  }
}