var express = require('express');
var router = express.Router();
var session = require("express-session");
var bodyParser = require('body-parser');
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
		var hidden = 'hidden';

	res.render('index', {forms: 'hidden', hidden: hidden, s: true, t1: t1, a1:a1, t2: t2 });
	});


	}
	
  
});

router.put('/', function(req, res, next){

	console.log("This is the session? ", req.session)
	
	console.log("This is session aaaaaaaaaaaaaaaaaa ", req.session.userId)
	db.Data.findById(1)
    .then(function(data){
    	console.log("this is req.body ", req.body);
    	if(req.body.t1){
    		console.log("This is req.body.t1 ", req.body.t1);
    		data.t1 = req.body.t1	
    	}
    	if(req.body.a1){
    		data.a1 = req.body.a1 	
    	}
    	
    	data.save();	

    	var t1 = data.dataValues.t1;
		var a1 = data.dataValues.a1;
		var t2 = data.dataValues.t2;
		var a2 = data.dataValues.a2;
    	
	    // data.t1 = document.getElementById(t1).innerHTML;
	    // data.a1 = document.getElementById(a1).innerHTML;
	
	 
    
    console.log("Yo");
    res.render('index', {s:'hidden', t1:t1, a1:a1, t2:t2}); 
});
});

router.get('/page2', function(req, res, next) {
  res.render('page2');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
