var express = require('express');
var router = express.Router();
var session = require("express-session");
var bodyParser = require('body-parser');
var db = require("../models");
var app = express();

/* GET home page. */

router.get('/', function(req, res, next) {
	
	var session = req.session; 
	
	db.Data.findById(1).then(function(article){

		var t1 = article.dataValues.t1;
		var a1 = article.dataValues.a1;
		var t2 = article.dataValues.t2;
		var a2 = article.dataValues.a2;
		var t3 = article.dataValues.t3;
		var a3 = article.dataValues.a3;
		var t4 = article.dataValues.t4;
		var a4 = article.dataValues.a4;
		var t5 = article.dataValues.t5;
		var a5 = article.dataValues.a5;
		var t6 = article.dataValues.t6;
		var a6 = article.dataValues.a6;

	if(session.userId){
		res.render('index', {s: 'hidden', t1:t1, a1:a1, t2:t2, a2: a2, t3: t3, a3: a3, t4: t4, a4: a4, t5: t5, a5:a5, t6:t6, a6:a6 });
	}else{
		var hidden = 'hidden';
		res.render('index', {forms: 'hidden', hidden: hidden, s: true, t1:t1, a1:a1, t2:t2, a2: a2, t3: t3, a3: a3, t4: t4, a4: a4, t5: t5, a5:a5, t6:t6, a6:a6 });
	}	
		
	});
	
});

router.put('/', function(req, res, next){

	db.Data.findById(1)
    .then(function(data){
    	if(req.body.t1){
    		data.t1 = req.body.t1	
    	}
    	if(req.body.a1){
    		data.a1 = req.body.a1 	
    	}
    	if(req.body.t2){
    		data.t2 = req.body.t2	
    	}
    	if(req.body.a2){
    		data.a2 = req.body.a2	
    	}
    	if(req.body.t3){
    		data.t3 = req.body.t3 	
    	}
    	if(req.body.a3){
    		data.a3 = req.body.a3 	
    	}
    	if(req.body.t4){
    		data.t4 = req.body.t4	
    	}
    	if(req.body.a4){
    		data.a4 = req.body.a4	
    	}
    	if(req.body.t5){
    		data.t5 = req.body.t5 	
    	}
    	if(req.body.a5){
    		data.a5 = req.body.a5 	
    	}
    	if(req.body.t6){
    		data.t6 = req.body.t6
    	}
    	if(req.body.a6){
    		data.a6 = req.body.a6 	
    	}
    	data.save();	
    	var t1 = data.dataValues.t1;
		var a1 = data.dataValues.a1;
		var t2 = data.dataValues.t2;
		var a2 = data.dataValues.a2;
		var t3 = data.dataValues.t3;
		var a3 = data.dataValues.a3;
		var t4 = data.dataValues.t4;
		var a4 = data.dataValues.a4;
		var t5 = data.dataValues.t5;
		var a5 = data.dataValues.a5;
		var t6 = data.dataValues.t6;
		var a6 = data.dataValues.a6;

    	res.render('index', {s:'hidden', t1:t1, a1:a1, t2:t2, a2: a2, t3: t3, a3: a3, t4: t4, a4: a4, t5: t5, a5:a5, t6:t6, a6:a6 });
	});
});

router.get('/page2', function(req, res, next) {
  res.render('page2');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
