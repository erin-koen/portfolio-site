exports.up = function(knex) {
	return knex.schema.createTable('project_tech', tbl => {
		tbl.increments();
		tbl.integer('project_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('projects')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('tech_name', 128);
		tbl.text('tech_use');
		tbl.string('logo', 128);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('project_tech');
};
