const express = require('express');
const router = express.Router();

// Log in page
router.get('/login', (req, res) => {
	res.render('login');
});

// sign up page
router.get('/signup', (req, res) => {
	res.render('signup');
});

router.post('/signup', (req, res) => {});

export default router;
