
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.string('city', 128);
      tbl.string('email', 128);
      tbl.string('twitter', 128);
      tbl.string('first_name', 128);
      tbl.string('last_name', 128);
      tbl.string('medium', 128);
      tbl.string('title', 128)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
