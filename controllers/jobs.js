const router = require('express').Router();
const Jobs = require('../models/JobsModel.js')

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

//likely need to destructure job descriptions off of this and make the call to that table within this endpoint.
router.post('/', async (req, res) => {
    try {
        console.log('controller', req.body)
        const newJob = await Jobs.add(req.body)
        res.status(201).json(newJob)
    } catch (error) {
        res.status(500).json({message: 'there was an error with the server.'})
        throw new Error(error)
    }
})

module.exports = router;