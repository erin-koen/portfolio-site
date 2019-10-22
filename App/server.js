require('dotenv').config();
const express = require('express');
const Sentry = require("@sentry/node")
const cron = require('node-cron')

//Routers
const userController = require('./controllers/user.js')
const jobsController = require('./controllers/jobs.js')
const schoolsController = require('./controllers/schools.js')
const projectsController = require('./controllers/projects.js')

const middleware = require('./middleware/config.js');
const errorMiddleware = require('./middleware/errorReporting.js');

const {priceQuery} = require('./Utilities/NomicsTwilio.js')

const server = express();
middleware(server)


cron.schedule('0 */30 * * * *', () => {
	console.log('cron job running');
	priceQuery();
});

//Routes
server.use('/api/user', userController)
server.use('/api/jobs', jobsController)
server.use('/api/schools', schoolsController)
server.use('/api/projects', projectsController)


//
errorMiddleware(server);

server.get('/', (req,res) => {
    res.send('sanity check');
})

port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})