var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET all spaces //
router.get('/spaces', function(req, res, next) {
  queries.getAll()
  .then(function(spaces) {
    res.status(200).json(spaces);
  })
  .catch(function(error) {
    next(error);
  });
});

module.exports = router;
