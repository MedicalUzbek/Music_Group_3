const express = require('express');
const Music = require('../model/Music');
const router = express.Router();
const User = require('../model/User')

/* GET users listing. */
router.get('/register', function (req, res, next) {
	res.render("register", { title: "Ro`yhatdan o`tish sahifasi" });
});

router.post('/register', function (req, res, next) {

	req.checkBody('name', 'iltimos ismingizni yozing').notEmpty();
	req.checkBody('username', 'iltimos usernamingizni yozing').notEmpty();
	req.checkBody('email', 'iltimos email yozing').notEmpty();
	req.checkBody('password', 'iltimos parol yozing').notEmpty();
	req.checkBody('password2', 'iltimos parolingizni tasdiqlang ').notEmpty();

	const errors = req.validationErrors();

	if (errors) {
		res.render('register', {
			title: "Ro`yhatdan o`tishda hato",
			errors: errors
		})
	} else {

		const name = req.body.name;
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		const password2 = req.body.password2;

		const newUser = new User({
			name: name,
			username: username,
			email: email,
			password: password,
		});

		newUser.save((err) => {
			if (err) console.log(err);
			else {
				req.flash('success', "Musiqa qo`shildi")
				res.redirect('/login')
			}
		})


	}

})

/* GET users listing. */
router.get('/login', function (req, res, next) {
	res.render("login", { title: "Saytga kirish" });
});




module.exports = router;
