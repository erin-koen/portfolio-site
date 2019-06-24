const router = require('express').Router();
const Projects = require('../models/ProjectsModel.js');
const ProjectTech = require('../models/ProjectTechModel.js');

router.get('/', async (req, res) => {
	try {
		const projects = await Projects.get();
		res.status(200).json(projects);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.post('/', async (req, res) => {
	try {
		console.log('in the endpoint');
		const newProject = await Projects.add(req.body);
		console.log(newProject)
		res.status(201).json(newProject);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.get('/tech/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const techStack = await ProjectTech.findByProjectId(id);
		res.status(200).json(techStack);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});

router.post('/tech', async (req, res) => {
	try {
		const newTech = await ProjectTech.add(req.body);
		const techStack = await ProjectTech.findByProjectId(newTech.project_id)
		res.status(201).json(techStack);
	} catch (error) {
		res.status(500).json({
			message: 'there was an error with the server.'
		});
		throw new Error(error);
	}
});
//delete a piece of the tech stack

router.delete('/tech/:id', async (req, res) => {
	const { id } = req.params;
	console.log(id)
	try {
		const tech = await ProjectTech.findById(id);
		console.log('tech', tech);
		const count = await ProjectTech.remove(id);
		if (count === 0) {
			const message =
				'This activity does not exist. How did you get here?';
			res.status(404).json({ message });
		} else {
			const stack = await ProjectTech.findByProjectId(
				tech.project_id
			);
			res.status(200).json(stack);
		}
	} catch (error) {
		const message = 'There was an error with the server.';
		res.status(500).json({ message });
		throw new Error(error);
	}
});

module.exports = router;
