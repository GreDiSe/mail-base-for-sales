const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const expressValidator = require('express-validator');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/post', (err) => {
    if(err) console.log(err);
    else {
        app.listen(3000, () => {
            console.log('Server started on port 3000')
        });
    }
});

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authorization');
    if (req.method === 'OPTIONS') {
        res.end();
    }
    next();
});
app.use(expressValidator());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(cookieParser());

app.use('/', index);
app.use('/', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
