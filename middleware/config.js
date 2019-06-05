const Sentry = require('@sentry/node');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser')


const rawBodyBuffer = (req, res, buf, encoding) => {
	if (buf && buf.length) {
		req.rawBody = buf.toString(encoding || 'utf8');
	}
};

module.exports = server => {
	server.use(Sentry.Handlers.requestHandler()); // needs to be before all request
	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
	server.use(cors());
	server.use(helmet());
};
