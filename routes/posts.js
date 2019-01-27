var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new-page', function(req, res, next) {
  res.render('new-page', { title: 'New page!'});
});

/* GET posts. */
router.get('/', function(req, res, next) {
  models.Post.all().then(function(posts) {
    res.render('posts/index', {
      title: 'Posts',
      posts: posts
    });
  });
});

module.exports = router;
