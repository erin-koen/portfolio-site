exports.up = function(knex) {
	return knex.schema.createTable('school_activities', tbl => {
		tbl.increments();
		tbl.integer('schoolId')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('schools')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('description', 128);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('schools');
};
