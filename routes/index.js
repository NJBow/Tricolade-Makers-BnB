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
    res.render('spaces', { title: 'Spaces',
                          spaces: spaces });
    //res.status(200).json(spaces);
  })
  .catch(function(error) {
    next(error);
  });
});



//GET single space //
router.get('/spaces/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(space) {
    res.status(200).json(space);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** add space *** //
router.post('/spaces', function(req, res, next) {
  queries.addSingle(req.body)
  .then(function(spaceID) {
    return queries.getSingle(spaceID);
  })
  .then(function(space) {
    res.status(200).json(space);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** update show *** //
router.put('/spaces/:id', function(req, res, next) {
  queries.updateSpace(req.params.id, req.body)
  .then(function() {
    return queries.getSingle(req.params.id);
  })
  .then(function(space) {
    res.status(200).json(space);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** delete show *** //
router.delete('/spaces/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(space) {
    queries.deleteSpace(req.params.id)
    .then(function() {
      res.status(200).json(space);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});

module.exports = router;
