exports.up = function(knex) {
	return knex.schema.createTable('jobs', tbl => {
		tbl.increments();

		tbl
			.integer('userId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('company_name', 128).notNullable();
		tbl.string('location', 128).notNullable();
		tbl.date('start_date').notNullable();
		tbl.date('end-date');
		tbl.string('position').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('jobs');
};
