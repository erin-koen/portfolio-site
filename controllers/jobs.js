const router = require('express').Router();
const Jobs = require('../models/JobsModel.js');
const JobDesc = require('../models/JobDescModel.js');

//need to add validation to all request bodies

router.get('/', async (req, res) => {
	try {
		const jobs = await Jobs.get();
		res.status(201).json(jobs);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.post('/', async (req, res) => {
	try {
		console.log('body', req.body);
		const newJob = await Jobs.add(req.body);
		res.status(201).json(newJob);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.get('/description/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const bulletPoints = await JobDesc.findByJobId(id);
		res.status(200).json(bulletPoints);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.post('/description', async (req, res) => {
	console.log('request body', req.body);
	try {
		const newBP = await JobDesc.add(req.body);
		res.status(201).json(newBP);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

//  Delete a bullet point
router.delete('/description/del/:id', async (req, res) => {
	const { id } = req.params;
	try {
		// get the bp object in order to access jobId
		const [bp] = await JobDesc.findById(id);
		// call remove function, returns 1 or 0
		const count = await JobDesc.remove(id);

		if (count === 0) {
			const message = 'This bullet point does not exist.';
			res.status(404).json({ message });
		} else {
			// Delete successful, return array of updated bulletpoints to update state
			const bulletPoints = await JobDesc.findByJobId(bp.jobId);
			res.status(200).json(bulletPoints);
		}
	} catch (error) {
		const message = 'There was an error with the server.';
		res.status(500).json({ message });
	}
});

module.exports = router;
