exports.up = function(knex, Promise) {
  return knex.schema.createTable('spaces', function(table){
    table.increments();
    table.string('name').notNullable().unique();
    table.string('description', 500).notNullable();
    table.integer('price_per_night').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spaces');
};
