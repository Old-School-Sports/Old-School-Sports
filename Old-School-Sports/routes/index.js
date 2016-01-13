var express = require('express');
var router = express.Router();
var session = require("express-session");
var db = require("../models");
var app = express();

/* GET home page. */

router.get('/', function(req, res, next) {
	
	var session = req.session; 
	
	if(session.userId){
		
		db.Data.findById(1).then(function(article){
		
		var t1 = article.dataValues.t1;
		var a1 = article.dataValues.a1;
		var t2 = article.dataValues.t2;
		var a2 = article.dataValues.a2;

	res.render('index', {s: 'hidden', t1: t1, a1:a1, t2: t2 });
	});


	}else{

		db.Data.findById(1).then(function(article){
		
		var t1 = article.dataValues.t1;
		var a1 = article.dataValues.a1;
		var t2 = article.dataValues.t2;
		var a2 = article.dataValues.a2;

	res.render('index', {s: true, t1: t1, a1:a1, t2: t2 });
	});


	}
	
  
});

router.put('/', function(req, res, next){
	
	console.log("This is session aaaaaaaaaaaaaaaaaa ", session.userId)
	db.Data.findById(1)
    .then(function(data){
    
	    // data.t1 = document.getElementById(t1).innerHTML;
	    // data.a1 = document.getElementById(a1).innerHTML;
	
	 data.save();	
    
    console.log("Yo");
    res.redirect('/'); 
});
});

router.get('/page2', function(req, res, next) {
  res.render('page2');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
