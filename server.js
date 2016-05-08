//npm modules
var http = require('http');
var path = require('path');
var fs = require('fs');
var express = require('express');
var body = require('body-parser');
//Custom modules
var tools = require('./tools');
var tax = require('./taxCalc');
var validate = require('./validate');

//Set express app
var app = express();
var server = http.createServer(app);
app.use(body.urlencoded({
  extended: true
}));

//Receive payee POST request
app.post('/payee', function(req, res) {
  validate.testPayee(req.body, res)
});

//Return an error for invalid POST requests
app.post('/*', function(req, res) {
  tools.error("Invalid request, please POST at /payee or GET /help", res)
});

//HELP
app.get('/help', function(req, res) {
  fs.readFile('README.md', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    res.setHeader('Content-Type', 'text/plain');
    res.send(data)
  })
});

//Server static frontend example
app.use('/', express.static(__dirname + '/public'));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("AUTAX available at ", addr.address + ":" + addr.port);
});
