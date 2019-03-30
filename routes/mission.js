var express = require('express');
var router = express.Router();

/* GET mission page. */
router.get('/mission', function(req, res, next) {
  res.render('mission', {
    title: 'Mission'
   });
});

router.get('/new-page', function(req, res, next) {
  res.render('new-page', { title: 'New page!'});
});

module.exports = router;
