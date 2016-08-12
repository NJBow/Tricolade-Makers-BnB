exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        name: 'Sophie',
        email: 'sophie@sophie.com',
        password: 'ruby'
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Nick',
        email: 'nick@nick.com',
        password: 'c++'
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Yuri',
        email: 'yuri@yuri.com',
        password: 'java'
      });
    });
};
