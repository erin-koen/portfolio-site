const axios = require('axios');
const qs = require('query-string');
const twilio = require('twilio');

const requestObject = {
	key: process.env.NOMICS_KEY,
	ids: 'BTC',
	interval: '1h',
	convert: 'USD'
};
console.log(requestObject);

const twilioClient = new twilio(
	process.env.TWILIO_SID,
	process.env.TWILIO_TOKEN
);

const endpoint = 'https://api.nomics.com/v1/currencies/ticker?';

const queryString = qs.stringify(requestObject, { sort: false });

function priceQuery() {
	axios
		.get(endpoint + queryString)
		.then(result => {
			const change = result.data[0]['1h'].price_change_pct * 100;
			if (change > 1.5) {
				twilioClient.messages.create({
					body: `Bitcoin is on the move. The price is up ${change}% in the last hour. The current price is $${result.data[0].price}`,
					to: `+13157967653`,
					from: `+13158645501`
				});
			} else if (change < -1.5) {
				twilioClient.messages.create({
					body: `Bitcoin is on the move. The price is down ${change}% in the last hour. The current price is $${result.data[0].price}`,
					to: `+13157967653`,
					from: `+13158645501`
				});
			}
		})
		.catch(error => console.log(error));
}

module.exports = {
	priceQuery
};
