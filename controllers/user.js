const router = require('express').Router();
const User = require('../models/UserModel.js')

router.post('/', async (req, res)=> {
    try {
        const newUser = await User.add(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({"message":"there was an error with the server."})
        throw new Error(error)
    }
})

router.get('/', (req,res) => {
    try {
        const user = User.get()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({"message":"there was an error with the server."})
    }
})


module.exports = router;