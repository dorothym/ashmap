var express = require('express'),
	chalk = require('chalk'),
	request = require('request'),
	morgan = require('morgan'),
	path = require('path'),
	bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 1337;

app.use(morgan('dev'));

app.use('/', require('./routes.js'));

app.use(express.static(path.join(__dirname, './node_modules')));
app.use(express.static(path.join(__dirname, './browser')));
app.use(express.static(path.join(__dirname, './data')));
app.use(express.static(path.join(__dirname, './static')));

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function (err, req, res, next) {
//   res.status(err.status).send('<h1>Error</h1>', err.message);
// });

app.get('/*', function (req, res) {
	console.log("app get *");
    res.sendFile(__dirname + '/views/index.html');
});

// app.use(function (req,res) {
//   res.status(404).send("<h1>Error</h1><p>Can't find that page</p>")
// });

app.listen(PORT, function () {
    console.log(chalk.blue('Server started on port', PORT));
});

