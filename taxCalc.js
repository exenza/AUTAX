// taxCalc.js
// ========
var tools = require('./tools');
var payslip = require('./payslip');

module.exports = {
    calc: function(req, res, medicare) {
        var amount = req.amount
        var pension = req.pension
        var grossAmount = tools.roundCents((amount / 12).toFixed(2))
        var medicareAmount = 0
        var medicareCredit = 0
        if (medicare) {
            medicareAmount = tools.roundCents(amount * 0.2)
        }
        if (amount - medicareAmount < 18200) {
            medicareCredit = 18200 - (amount - medicareAmount)
        }
        medicareAmount = tools.roundCents(medicareAmount / 12)
        medicareCredit = tools.roundCents(medicareCredit / 12)
        var taxBand = 0

        if (amount <= 18200) {
            var incomeTax = 0
        }
        else {
            //$18,201 - $37,000 19c for each $1 over $18,200
            if (amount <= 37000) {
                var incomeTax = tools.roundCents((amount - 18200) * 0.37 / 12)
                taxBand = 1
            }

            //$37,001 - $80,000 $3,572 plus 32.5c for each $1 over $37,000
            if (amount > 37000 && amount <= 80000) {
                var incomeTax = tools.roundCents((3572 + (amount - 37000) * 0.325) / 12)
                taxBand = 2
            }

            //$80,001 - $180,000 $17,547 plus 37c for each $1 over $80,000
            if (amount > 80000 && amount <= 180000) {
                var incomeTax = tools.roundCents((17547 + (amount - 80000) * 0.37) / 12)
                taxBand = 3
            }

            //$180,001 and over $54,547 plus 45c for each $1 over $180,000
            if (amount >= 180001) {
                var incomeTax = tools.roundCents((54547 + (amount - 180000) * 0.45) / 12)
                taxBand = 4
            }
        }

        var netAmount = grossAmount - incomeTax
            //Substracting any medicare due
        netAmount -= medicareAmount - medicareCredit
        var pensionAmount = tools.roundCents((grossAmount * (pension / 100)).toFixed(2))
        payslip.newPayslip(req, res, amount, grossAmount, netAmount, incomeTax, pension, pensionAmount, medicare, medicareAmount, medicareCredit, taxBand)
    }
}