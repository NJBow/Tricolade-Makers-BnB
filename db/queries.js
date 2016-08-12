var knex = require('./knex.js');

function Spaces() {
  return knex('spaces');
}

function Users() {
  return knex('users');
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

function updateSpace(spaceID, updates) {
  return Spaces().where('id', parseInt(spaceID)).update(updates);
}

function deleteSpace(spaceID) {
  return Spaces().where('id', parseInt(spaceID)).del();
}

function addUser(user) {
  return Users().insert(user,'id');
}

function getUser(userID) {
  return Users().where('id', parseInt(userID)).first();
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  addSingle: addSingle,
  updateSpace: updateSpace,
  deleteSpace: deleteSpace,
  addUser: addUser,
  getUser: getUser
};
