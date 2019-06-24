const router = require('express').Router();
const Schools = require('../models/SchoolsModel.js');
const SchoolActivities = require('../models/SchoolActivitiesModel.js');

router.get('/', async (req, res) => {
	try {
		const schools = await Schools.get();
		res.status(200).json(schools);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.post('/', async (req, res) => {
	try {
		const newSchool = await Schools.add(req.body);
		res.status(201).json(newSchool);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.get('/activities/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const activities = await SchoolActivities.findBySchoolId(id);
		res.status(200).json(activities);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.post('/activities', async (req, res) => {

	try {
        const newActivity = await SchoolActivities.add(req.body);
        console.log(newActivity)
		res.status(201).json(newActivity);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
        throw new Error(error);
	}
});
//delete an activity
router.delete('/activities/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
	try {
        const activity = await SchoolActivities.findById(id);
        console.log('activity', activity)
		const count = await SchoolActivities.remove(id);
		if (count === 0) {
			const message =
				'This activity does not exist. How did you get here?';
			res.status(404).json({ message });
		} else {
			const activities = await SchoolActivities.findBySchoolId(
				activity.schoolId
			);
			res.status(200).json(activities);
		}
	} catch (error) {
        const message = 'There was an error with the server.';
        res.status(500).json({message});
        throw new Error(error);

    }
    
});

module.exports = router;
