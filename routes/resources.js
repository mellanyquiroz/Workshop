var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET details for categories. */
router.get('/:id', function(req, res, next) {
  res.render('resources/show', {
    title: 'Resources' ,
    params: req.params
  });
});

module.exports = router;
