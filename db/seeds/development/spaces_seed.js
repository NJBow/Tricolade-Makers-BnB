exports.seed = function(knex, Promise) {
  return knex('spaces').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('spaces').insert({
        name: 'Lovely cottage',
        description: 'An awesome little cottage',
        price_per_night: 100
      });
    }).then(function () {
      return knex('spaces').insert({
        name: 'Awesome penthouse',
        description: 'A great penthouse',
        price_per_night: 200
      });
    }).then(function () {
      return knex('spaces').insert({
        name: 'Little flat',
        description: 'A cosy basement studio',
        price_per_night: 10
      });
    }).then(function () {
      return knex('spaces').insert({
        name: 'Mansion',
        description: 'A massive countryside mansion',
        price_per_night: 1000
      });
    });
};
