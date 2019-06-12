const db = require('../data/dbconfig');

module.exports = {
	add,
	findByJobId,
	get,
	remove
};

// add a user
async function add(description) {
	console.log('model', description)
	const [id] = await db('jobdesc')
		.insert(description)
		.returning('id');
	console.log('id', id)
	return findById(id);
}

async function findById(id) {
	console.log('in findById', id)
	const bp = await db('jobdesc').where({ id })
	console.log('after await', bp)
	return bp
}

function findByJobId(jobId) {
	return db('jobdesc').where({ jobId });
}

function get() {
	return db('jobdesc');
}

function remove(id) {
	return db('jobdesc')
		.where({ id })
		.del();
}
