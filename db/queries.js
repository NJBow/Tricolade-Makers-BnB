var knex = require('./knex.js');

function Spaces() {
  return knex('spaces');
}

// *** queries *** //

function getAll() {
  return Spaces().select();
}


module.exports = {
  getAll: getAll
};
