exports.up = function(knex) {
	return knex.schema.createTable('jobdesc', tbl => {
		tbl.increments();
		tbl
			.integer('jobId')
			.references('id')
			.inTable('jobs')
			.onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.string('bulletPoint', 128)
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('jobdesc');
};
