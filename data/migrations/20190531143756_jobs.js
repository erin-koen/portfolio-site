exports.up = function(knex) {
	return knex.schema.createTable('jobs', tbl => {
		tbl.increments();

		tbl
			.integer('userId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('user')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('company_name', 128).notNullable();
		tbl.string('city', 128).notNullable();
		tbl.string('state', 128).notNullable();
		tbl.date('start_date').notNullable();
		tbl.date('end_date');
		tbl.string('position').notNullable();
		tbl.string('logo', 128)
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('jobs');
};
