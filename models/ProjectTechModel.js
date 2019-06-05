const db = require('../data/dbconfig');

module.exports = {
	add,
	findById,
	get,
	remove
};

// add a user
async function add(tech) {
	const [id] = await db('project_tech')
		.insert(tech)
		.returning('id');
	return findById(id);
}

function findById(id) {
	return db('project_tech')
		.where({ id })
		.first();
}

function get() {
	return db('project_tech');
}

function remove(id) {
	return db('project_tech')
		.where({ id })
		.del();
}
