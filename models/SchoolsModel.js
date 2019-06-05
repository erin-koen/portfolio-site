const db = require('../data/dbconfig');

module.exports = {
	add,
	findById,
	get,
	remove
};

// add a user
async function add(school) {
	const [id] = await db('schools')
		.insert(school)
		.returning('id');
	return findById(id);
}

function findById(id) {
	return db('schools')
		.where({ id })
		.first();
}

function get() {
	return db('schools');
}

function remove(id) {
	return db('schools')
		.where({ id })
		.del();
}
