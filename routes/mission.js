var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('mission/show', {
     title: 'Mission!'
   });
});

module.exports = router;
