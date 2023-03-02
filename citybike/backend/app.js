var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var journeyrouter = require('./routes/journeyrouter');
var stationrouter = require('./routes/stationrouter');

var app = express();

//Link pages to backend

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/journeys', journeyrouter);
app.use('/stations', stationrouter);

module.exports = app;
