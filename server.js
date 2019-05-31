require('dotenv').config();
const express = require('express');
const Sentry = require("@sentry/node")

//Routers
const userController = require('./controllers/user.js')


const middleware = require('./middleware/config');
const errorMiddleware = require('./middleware/errorReporting');

const server = express();
middleware(server)

//Routes
server.use('/api/user', userController)



//
errorMiddleware(server);

server.get('/', (req,res) => {
    res.send('sanity check');
})

port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})