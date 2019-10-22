const db = require('../data/dbconfig');

module.exports = {
	add,
	findById,
	findByProjectId,
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

async function findById(id) {
	const tech = await db('project_tech')
		.where({ id })
		.first();
	return tech
}

async function findByProjectId(project_id) {
	const stack = await db('project_tech').where({ project_id })
	return stack
}

function get() {
	return db('project_tech');
}

function remove(id) {
	return db('project_tech')
		.where({ id })
		.del();
}
