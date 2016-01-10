var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
