const express = require('express');
import knex from '../../config/db/knex';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import expressValidator from 'express-validator';
const router = express.Router();

const saltRounds = 10;

// Log in page
router.get('/login', (req, res) => {
	res.render('login');
});

// sign up page
router.get('/signup', (req, res) => {
	console.log(req.user);
	console.log(req.isAuthenticated());
	res.render('signup');
});

router.get('/users', (req, res) => {
	knex.select().from('users').then((users) => {
		res.send(users);
	});
});

router.post('/signup', (req, res) => {
	const fn = req.body.firstName;
	const ln = req.body.lastName;
	const un = req.body.userName;
	const email = req.body.email;
	const pw = req.body.password;
	const pw2 = req.body.password2;

	req.checkBody('userName', 'username can not be empty').notEmpty();
	req.checkBody('email', 'email can not be empty').isEmail();
	req.checkBody('password', 'password must be at least 6 chars long').isLength({
		min: 6
	});
	req.checkBody('password2', "passwords don't match").equals(pw);

	const errors = req.validationErrors();
	if (errors) {
		console.log(errors);
		//	return res.status(422).json({ errors: errors });
		return res.status(422).render('signup', {
			errors: errors
		});
	} else {
		bcrypt.hash(pw, saltRounds, function (err, hash) {
			// Store hash in your password DB.
			knex('users')
				.insert({
					firstName: fn,
					lastName: ln,
					userName: un,
					email: email,
					password: hash
				})
				.then((error, results, fields) => {
					try {
						console.log('it is working tiil up here');
						knex.select(knex.raw(' last_insert_id() as user_id')).then((results) => {
							try {
								const user_id = results[0];
								console.log(user_id);
								req.login(user_id, (err) => {
									res.redirect('/');
								});
							} catch (error) {
								throw error;
							}
						});
					} catch (error) {
						throw error;
					}
				});
		});
	}
});

passport.serializeUser(function (user_id, done) {
	done(null, user_id);
});

passport.deserializeUser(function (user_id, done) {
	done(null, user_id);
});

export default router;