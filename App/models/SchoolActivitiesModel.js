const db = require('../data/dbconfig.js');

module.exports = {
	add,
	findById,
	findBySchoolId,
	get,
	remove
};

// add a user
async function add(activity) {
	const [schoolId] = await db('school_activities')
		.insert(activity)
		.returning('schoolId');
	return findBySchoolId(schoolId);
}

async function findById(id) {
	const activity = await db('school_activities')
		.where({ id })
		.first();
	return activity
}

async function findBySchoolId(schoolId) {
	const activities = await db('school_activities').where({schoolId})
	return activities
}

function get() {
	return db('school_activities');
}

function remove(id) {
	return db('school_activities')
		.where({ id })
		.del();
}
