var knex = require('./knex.js');

function Spaces() {
  return knex('spaces');
}

// *** queries *** //

function getAll() {
  return Spaces().select();
}

function getSingle(spaceID) {
  return Spaces().where('id', parseInt(spaceID)).first();
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle
};
