AUTAX README v.0.0.1

The application accept only POST requests at /payee to calculate Australian Taxation.
This code has been written as an excercise and should be used for educational purposes only.

To demo the applicaion a simple frontend example is served at /:
httpp://autax.herokuapp.com

It's possible as well to test the app using bash script:
/utilities/remote_test.sh

The application will validate the object parameters listed below:

payee POST parameters:
MANDATORY
- firstName [String]
- lastName [String]
- period [Integer (1 to 12)] - assumption is that application should not handle partial months
- amount [Integer]
- pension [Integer (0 to 50)]
OPTIONAL
- medicare [Integer (0/1), Default: 0)]

If mandatory parameters are missing or parameters have incorrect values an error object will be returned.
Error objet will be returned as follow:
{"error":"firstName cannot be null"}

The error object will be returned as well for any POST request which are not directed to /payee

If request is successful the following JSON object will be returned:
{
    "firstName":[String],
    "lastName":[String]
    "period":[String]
    "amount":[Integer]
    "grossAmount":[Integer]
    "netAmount":[Integer]
    "incomeTax":[Integer]
    "pension":[String],
    "pensionAmount":[Integer],
    "medicare":[Boolean],
    "medicareAmount":[Integer],
    "medicareCredit":[Integer],
    "taxBand":[Integer (0 to 4)]
}
