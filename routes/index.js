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
		var t7 = article.dataValues.t7;
		var a7 = article.dataValues.a7;
		var t8 = article.dataValues.t8;
		var a8 = article.dataValues.a8;
		var t9 = article.dataValues.t9;
		var a9 = article.dataValues.a9;
		var t10 = article.dataValues.t10;
		var a10 = article.dataValues.a10;
		var t11 = article.dataValues.t11;
		var a11 = article.dataValues.a11;
		var t12 = article.dataValues.t12;
		var a12 = article.dataValues.a12;

	if(session.userId){
		res.render('index', {s: 'hidden', t1:t1, a1:a1, t2:t2, a2: a2, t3: t3, a3: a3, t4: t4, a4: a4, t5: t5, a5:a5, t6:t6, a6:a6, t7:t7, a7:a7, t8:t8, a8:a8, t9:t9, a9:a9, t10:t10, a10:a10, t11:t11, a11:a11, t12:t12, a12:a12 });
	}else{
		var hidden = 'hidden';
		res.render('index', {forms: 'hidden', hidden: hidden, s: true, t1:t1, a1:a1, t2:t2, a2: a2, t3: t3, a3: a3, t4: t4, a4: a4, t5: t5, a5:a5, t6:t6, a6:a6, t7:t7, a7:a7, t8:t8, a8:a8, t9:t9, a9:a9, t10:t10, a10:a10, t11:t11, a11:a11, t12:t12, a12:a12 });
	}	
		
	});
	
});

router.put('/', function(req, res, next){

	db.Data.findById(1)
    .then(function(article){
    	if(req.body.t1){
    		article.t1 = req.body.t1	
    	}
    	if(req.body.a1){
    		article.a1 = req.body.a1 	
    	}
    	if(req.body.t2){
    		article.t2 = req.body.t2	
    	}
    	if(req.body.a2){
    		article.a2 = req.body.a2	
    	}
    	if(req.body.t3){
    		article.t3 = req.body.t3 	
    	}
    	if(req.body.a3){
    		article.a3 = req.body.a3 	
    	}
    	if(req.body.t4){
    		article.t4 = req.body.t4	
    	}
    	if(req.body.a4){
    		article.a4 = req.body.a4	
    	}
    	if(req.body.t5){
    		article.t5 = req.body.t5 	
    	}
    	if(req.body.a5){
    		article.a5 = req.body.a5 	
    	}
    	if(req.body.t6){
    		article.t6 = req.body.t6
    	}
    	if(req.body.a6){
    		article.a6 = req.body.a6 	
    	}
    	article.save();	
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
		

    	res.render('index', {s:'hidden', t1:t1, a1:a1, t2:t2, a2: a2, t3: t3, a3: a3, t4: t4, a4: a4, t5: t5, a5:a5, t6:t6, a6:a6});
	});
});

router.get('/page2', function(req, res, next) {

	var session = req.session; 
	
	db.Data.findById(1).then(function(article){

	var t7 = article.dataValues.t7;
	var a7 = article.dataValues.a7;
	var t8 = article.dataValues.t8;
	var a8 = article.dataValues.a8;
	var t9 = article.dataValues.t9;
	var a9 = article.dataValues.a9;
	var t10 = article.dataValues.t10;
	var a10 = article.dataValues.a10;
	var t11 = article.dataValues.t11;
	var a11 = article.dataValues.a11;
	var t12 = article.dataValues.t12;
	var a12 = article.dataValues.a12;

	if(session.userId){
		res.render('page2', {s: 'hidden', t7:t7, a7:a7, t8:t8, a8:a8, t9:t9, a9:a9, t10:t10, a10:a10, t11:t11, a11:a11, t12:t12, a12:a12 });
	}else{
		var hidden = 'hidden';
		res.render('page2', {forms: 'hidden', hidden: hidden, s: true, t7:t7, a7:a7, t8:t8, a8:a8, t9:t9, a9:a9, t10:t10, a10:a10, t11:t11, a11:a11, t12:t12, a12:a12 });
	}	
		
	});

});

router.put('/page2', function(req, res, next){

	db.Data.findById(1)
    .then(function(article){
    	if(req.body.t7){
    		article.t7 = req.body.t7	
    	}
    	if(req.body.a7){
    		article.a7 = req.body.a7 	
    	}
    	if(req.body.t8){
    		article.t8 = req.body.t8	
    	}
    	if(req.body.a8){
    		article.a8 = req.body.a8	
    	}
    	if(req.body.t9){
    		article.t9 = req.body.t9 	
    	}
    	if(req.body.a9){
    		article.a9 = req.body.a9 	
    	}
    	if(req.body.t10){
    		article.t10 = req.body.t10	
    	}
    	if(req.body.a10){
    		article.a10 = req.body.a10	
    	}
    	if(req.body.t11){
    		article.t11 = req.body.t11 	
    	}
    	if(req.body.a11){
    		article.a11 = req.body.a11 	
    	}
    	if(req.body.t12){
    		article.t12 = req.body.t12
    	}
    	if(req.body.a12){
    		article.a12 = req.body.a12 	
    	}
    	article.save();	
    	var t7 = article.dataValues.t7;
		var a7 = article.dataValues.a7;
		var t8 = article.dataValues.t8;
		var a8 = article.dataValues.a8;
		var t9 = article.dataValues.t9;
		var a9 = article.dataValues.a9;
		var t10 = article.dataValues.t10;
		var a10 = article.dataValues.a10;
		var t11 = article.dataValues.t11;
		var a11 = article.dataValues.a11;
		var t12 = article.dataValues.t12;
		var a12 = article.dataValues.a12;
		

    	res.render('page2', {s:'hidden', t7:t7, a7:a7, t8:t8, a8: a8, t9: t9, a9: a9, t10: t10, a10: a10, t11: t11, a11:a11, t12:t12, a12:a12});
	});
});

router.get('/login', function(req, res, next) {
  res.render('login', {warning: ' '});
});

module.exports = router;
