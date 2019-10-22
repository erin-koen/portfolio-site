const db = require('../data/dbconfig.js');

module.exports = {
    add,
    findMaxByDate
};

// add a list of contracts to the table
// pull most active contract by date

async function add(contractArr) {
	for (contract in contractArr) {
		await db('ledgerXcontracts').insert(contractArr);
	}
	return 'Contracts added succesfully.';
}

async function findMaxByDate(date, contractType) {
	const maxVolume = await db('ledgerXcontracts')
		.max('volume')
        .where({ trade_date: date, contract_type: contractType });
    return maxVolume
}
