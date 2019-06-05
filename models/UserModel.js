const db = require('../data/dbconfig');

module.exports = {
	add,
	findById,
	get,
	remove
};

// add a user
async function add(user) {
	const [id] = await db('user')
		.insert(user)
		.returning('id');
	return findById(id);
}

function findById(id) {
	return db('user')
		.where({ id })
		.first();
}

function get() {
	return db('user');
}

function remove(id) {
	return db('user')
		.where({ id })
		.del();
}
