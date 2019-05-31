exports.up = function(knex) {
	return knex.schema.createTable('schools', tbl => {
		tbl.increments();
		tbl
			.integer('userId')
			.references('id')
			.inTable('user')
			.unsigned()
			.notNullable()
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('school_name', 128).notNullable();
		tbl.string('school_degree', 128).notNullable();
		tbl.string('school_major', 128).notNullable();
		tbl.string('location', 128).notNullable();
		tbl.date('start_date').notNullable();
		tbl.date('end_date');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('schools');
};
