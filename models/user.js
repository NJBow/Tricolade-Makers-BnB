var app = require('../app')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    port     : '5432',
    database : 'makers_bnb_test',
    charset  : 'UTF8_GENERAL_CI'
  }
});

var bookshelf = require('bookshelf')(knex);

knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('email', 128);
    table.string('password');
});
