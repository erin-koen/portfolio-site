const db = require('../data/dbconfig');

module.exports = {
	add,
	findById,
	get,
	remove
};

// add a user
async function add(description) {
	const [id] = await db('jobdesc')
		.insert(description)
		.returning('id');
	return findById(id);
}

function findById(id) {
	return db('jobdesc')
		.where({ id })
		.first();
}

function get() {
	return db('jobdesc');
}

function remove(id) {
	return db('jobdesc')
		.where({ id })
		.del();
}
