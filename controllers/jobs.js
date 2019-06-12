const router = require('express').Router();
const Jobs = require('../models/JobsModel.js')
const JobDesc = require('../models/JobDescModel.js')

//need to add validation to all request bodies

router.get('/', async (req, res) => {
    try {
        const jobs = await Jobs.get()
        res.status(201).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'there was an error with the server.'})
        throw new Error(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const newJob = await Jobs.add(req.body)
        res.status(201).json(newJob)
    } catch (error) {
        res.status(500).json({message: 'there was an error with the server.'})
        throw new Error(error)
    }
})

router.get('/description/:id', async (req, res) => {
    const {id} = req.params
    try {
        const bulletPoints = await JobDesc.findByJobId(id)
        res.status(200).json(bulletPoints)
    } catch (error) {
        res.status(500).json({message: 'there was an error with the server.'})
        throw new Error(error);
    }
})

router.post('/description', async (req, res) => {
    console.log('request body', req.body)
    try {
        const newBP = await JobDesc.add(req.body)
        res.status(201).json(newBP)    
    } catch (error) {
        res.status(500).json({message: 'there was an error with the server.'})
    }
    throw new Error(error)
})

module.exports = router;