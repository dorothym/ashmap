var express = require('express'),
	request = require('request'),
	path = require('path'),
	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',express.static('static'));

app.get('/', function(req,res) {
	var response = '<h2>Test</h2>'
	res.send(response)
});

/* api */

app.get('/api/bronx', function(req,res) {

	console.log("bronx");
});


module.exports = app;

