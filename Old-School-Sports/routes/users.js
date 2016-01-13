var express = require('express');
var router = express.Router();
var session = require("express-session");
var app = express();
var db = require("../models"); 
var bodyParser = require('body-parser');

/* GET users listing. */

router.use("/", function (req, res, next) {

  req.login = function (user) {
    req.session.userId = user.id;
  };

  req.currentUser = function () {
    return db.User.
      find({
        where: {
          id: req.session.userId
       }
      }).
      then(function (user) {
        req.user = user;
        return user;
      })
  };

  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }

  next(); 
});


router.post('/', function(req,res) {
  var user = req.body.user;
  var session = req.session; 
  
  db.User
    .authenticate(user.email, user.password)
    .then(function (user) {
  
          req.login(user);
  
          
      }).then(function(){

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

          res.render('index', {s: false, t1:t1, a1:a1, t2:t2, a2: a2, t3: t3, a3: a3, t4: t4, a4: a4, t5: t5, a5:a5, t6:t6, a6:a6});
        });

      });

    
});

router.post('/page2', function(req,res) {
  var user = req.body.user;
  var session = req.session; 
  
  db.User
    .authenticate(user.email, user.password)
    .then(function (user) {
  
          req.login(user);
  
          
      }).then(function(){

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

          res.render('page2', {s: false, t7:t7, a7:a7, t8:t8, a8: a8, t9: t9, a9: a9, t10: t10, a10: a10, t11: t11, a11:a11, t12:t12, a12:a12});
        });

      });

    
});


module.exports = router;
