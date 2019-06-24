const db = require('../data/dbconfig');

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

function findById(id) {
	return db('school_activities')
		.where({ id })
		.first();
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
