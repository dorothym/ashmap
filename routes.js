var express = require('express'),
	request = require('request'),
	path = require('path'),
	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;