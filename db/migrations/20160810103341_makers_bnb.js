exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
    }),

    knex.schema.createTable('spaces', function(table){
      table.increments();
      table.string('name').notNullable().unique();
      table.string('description', 500).notNullable();
      table.integer('price_per_night').notNullable();
    })

  ]);

};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('spaces'),
    knex.schema.dropTable('users')
  ]);

};
