const router = require('express').Router();
const User = require('../models/UserModel.js');

router.post('/', async (req, res) => {
	try {
		const newUser = await User.add(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: 'there was an error with the server.' });
		throw new Error(error);
	}
});

router.get('/', async (req, res) => {
	try {
		const user = await User.get().first();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: 'there was an error with the server.' });
		throw new Error(error);
	}
});

router.delete('/:userid', async (req, res) => {
	const { id } = req.params;
	try {
		await User.remove(id);
		res.status(200).json({ message: 'the user was deleted successfully.' });
	} catch (error) {
		res.status(500).json({ message: 'There was an error with the server.' });
		throw new Error(error);
	}
});

module.exports = router;
