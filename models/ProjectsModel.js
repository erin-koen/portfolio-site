const db = require('../data/dbconfig');

module.exports = {
	add,
	findById,
	get,
	remove
};

// add a user
async function add(project) {
	const [id] = await db('projects')
		.insert(project)
		.returning('id');
	return findById(id);
}

function findById(id) {
	return db('projects')
		.where({ id })
		.first();
}

function get() {
	return db('projects');
}

function remove(id) {
	return db('projects')
		.where({ id })
		.del();
}
