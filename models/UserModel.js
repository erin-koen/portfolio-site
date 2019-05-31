const db = require('../data/dbconfig');

module.exports = {
	add,
    find,
    get     
};

// add a user
async function add(user) {
	try {
		const [id] = await db('user')
			.insert(user);
		return find(id);
	} catch (error) {
        console.log(error)
    }
}

function find(id) {
	return db('user').where({ id });
}

function get() {
    return db('user')
}