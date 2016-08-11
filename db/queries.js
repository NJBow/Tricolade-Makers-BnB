var knex = require('./knex.js');

function Spaces() {
  return knex('spaces');
}

// *** queries *** //

function getAll() {
  console.log(1);
  return Spaces().select();
}

function getSingle(spaceID) {
  return Spaces().where('id', parseInt(spaceID)).first();
}

function addSingle(space) {
  return Spaces().insert(space, 'id');
}

function updateSpace(spaceID, updates) {
  return Spaces().where('id', parseInt(spaceID)).update(updates);
}

function deleteSpace(spaceID) {
  return Spaces().where('id', parseInt(spaceID)).del();
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  addSingle: addSingle,
  updateSpace: updateSpace,
  deleteSpace: deleteSpace
};
