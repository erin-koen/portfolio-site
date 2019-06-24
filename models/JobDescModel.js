const db = require('../data/dbconfig');

module.exports = {
	add,
	findByJobId,
	findById,
	get,
	remove
};

// add a user
async function add(description) {
	const [jobId] = await db('jobdesc')
		.insert(description)
		.returning('jobId');
	return findByJobId(jobId);
}

async function findById(id) {
	const bp = await db('jobdesc').where({ id });
	return bp;
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
