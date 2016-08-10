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

function addSingle(space) {
  return Spaces().insert(space, 'id');
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  addSingle: addSingle
};
