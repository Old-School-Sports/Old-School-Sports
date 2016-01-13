var express = require('express');
var router = express.Router();
var session = require("express-session");
var db = require("../models"); 
var app = express();

/* GET home page. */

router.get('/', function(req, res, next) {
	var t1 = 'hello'; 
	db.Data.findById(1).then(function(article){
	
	var t1 = article.dataValues.t1;
	var a1 = article.dataValues.a1;
	var t2 = article.dataValues.t2;
	var a2 = article.dataValues.a2;
	
	res.render('index', {t1: t1, a1:a1, t2: t2 });	
	})

  
});

router.get('/page2', function(req, res, next) {
  res.render('page2');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
