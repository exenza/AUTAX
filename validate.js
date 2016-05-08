// validate.js
// ========
var tools = require('./tools');
var tax = require('./taxCalc');

module.exports = {

  testPayee: function(req, res) {

    //Validate mandatory properties

    //fileName is mandatory and must be a string
    if (req.hasOwnProperty('firstName')) {
      if (!isNaN(req.firstName) || !req.firstName) {
        tools.error("firstName must be a String", res)
      }
    }
    else {
      tools.error("firstName not provided", res)
    }

    //lastName is mandatory and must be a string
    if (req.hasOwnProperty('lastName')) {
      if (!isNaN(req.lastName) || !req.lastName) {
        tools.error("lastName must be a String", res)
      }
    }
    else {
      tools.error("lastName not provided", res)
    }

    //period is mandatory and must be a number between 0 and 11
    if (req.hasOwnProperty('period')) {
      if (isNaN(req.period) || !req.period) {
        tools.error("period must be a number", res)
      }
      if (req.period < 1 || req.period > 12) {
        error("period must be between 1 (January) and 12 (December)", res)
      }
    }
    else {
      tools.error("period not provided", res)
    }

    //amount is mandatory and must be a positive integer
    if (req.hasOwnProperty('amount')) {
      if (isNaN(req.amount) || !req.amount) {
        tools.error("amount must be a number", res)
      }
      if (req.amount < 0 || req.amount % 1 != 0) {
        tools.error("amount must be a positive integer", res)
      }
    }
    else {
      tools.error("amount not provided", res)
    }

    //pension is mandatory and must be a positive integer
    if (req.hasOwnProperty('pension')) {
      if (isNaN(req.pension) || !req.pension) {
        tools.error("pension must be a number", res)
      }
      if (req.pension < 0 || req.pension % 1 != 0) {
        tools.error("pension must be a positive integer", res)
      }
      if (req.pension > 50) {
        tools.error("pension cannnot be higher than 50", res)
      }
    }
    else {
      tools.error("pension not provided", res)
    }

    //Optional properties

    //medicare must be a boolean
    if (req.hasOwnProperty('medicare')) {
      if (req.medicare != 0 && req.medicare != 1) {
        tools.error("medicare must be a boolean: 0 or 1", res)
      }
      var medicare = req.medicare
      if(medicare==0){medicare=false}else{medicare=true}
    }
    else {
      var medicare = false
    }

    tax.calc(req, res, medicare)
  }
}