import cookieParser from 'cookie-parser';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';
import session from 'express-session';
import bodyParser from 'body-parser';
import expressLayouts from 'express-ejs-layouts';
import expressValidator from 'express-validator';
import passport from 'passport';
import indexRouter from './routes/index';
import usersRouter from './routes/users';


const Knex = require('knex');

const knex = new Knex({
	client: 'pg',
	connection: {
		host: 'localhost',
		user: 'khaled',
		password: 'khaled',
		database: 'plateforme_db',
		charset: 'utf8'
	}
});

const KnexSessionStore = require('connect-session-knex')(session);
const store = new KnexSessionStore /* options here */({
	knex: knex
});


const app = express();

// view engine setup
app.use(expressLayouts);
//app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(expressValidator());
app.use(cookieParser());

// static folders
app.use(express.static(path.join(__dirname, '../public')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js'))); // redirect bootstrap JS
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css'))); // redirect CSS bootstrap
app.use('/fontawesome', express.static(path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free'))); // redirect CSS bootstrap

// Express session
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false
	})
);
// intialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export default app;