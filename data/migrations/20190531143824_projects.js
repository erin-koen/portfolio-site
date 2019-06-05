exports.up = function(knex) {
	return knex.schema.createTable('projects', tbl => {
		tbl.increments();
		tbl
			.integer('userId')
			.references('id')
			.inTable('user')
			.unsigned()
			.notNullable()
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('description', 256);
		tbl.string('repo_link', 128);
		tbl.string('deployed_fe', 128);
		tbl.string('deployed_be', 128);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('projects');
};
