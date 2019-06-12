const db = require('../data/dbconfig');

module.exports = {
	add,
	findById,
	get,
	remove
};

// add a user
async function add(job) {
	const [id] = await db('jobs')
		.insert(job)
		.returning('id');
	return findById(id);
}

function findById(id) {
	return db('jobs')
		.where({ id })
		.first();
}

function get() {
	return db('jobs');
}

function remove(id) {
	return db('jobs')
		.where({ id })
		.del();
}
