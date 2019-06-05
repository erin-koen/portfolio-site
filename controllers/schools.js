const router = require('express').Router();
const Schools = require('../models/SchoolsModel.js')

router.post('/', async (req, res) => {
    try {
        const newSchool = await Schools.add(req.body)
    } catch (error) {
        
    }
});