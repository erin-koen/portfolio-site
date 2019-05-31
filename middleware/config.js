const Sentry = require('@sentry/node');
const helmet = require('helmet');
const cors = require('cors');




module.exports = server => {
	server.use(Sentry.Handlers.requestHandler()); // needs to be before all request
	server.use(cors());
	server.use(helmet());
};
