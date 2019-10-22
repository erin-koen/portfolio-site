exports.up = function(knex) {
    return knex.schema.createTable('ledgerXcontracts', tbl => {
        tbl.increments();
        tbl.date('trade_date');
        tbl.date('expiry_date');
        tbl.string('strike');
        tbl.string('contract_type');
        tbl.string('option_type');
        tbl.integer('volume');
        tbl.integer('open_interest');
        tbl.float('vwap');
    });
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ledgerXcontracts');
};