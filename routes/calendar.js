var express = require('express');
var router = express.Router();


/* GET details for categories. */
router.get('/', function(req, res, next) {
  res.render('calendar/index', {
    title: 'Calendar' ,
    params: req.params

  });
});

module.exports = router;
