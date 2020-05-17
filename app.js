const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const backofficeRouter = require('./routes/backoffice');
const modulesRouter = require('./routes/modules');

const app = express();

// config db
require('./db/config');

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public'),
	indentedSyntax: false, // true = .sass and false = .scss
	sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/', backofficeRouter);
app.use('/modules', modulesRouter);


// catch 404 and render the 404 page
app.use(function (req, res) {
	res.render('404');
});

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	console.log('error:', err);
	res.render('error', { err });
});

module.exports = app;
