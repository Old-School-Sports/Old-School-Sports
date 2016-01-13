var express = require('express');
var router = express.Router();
var session = require("express-session");
var app = express();
var db = require("../models"); 

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

          res.render('index', {s: 'hidden', t1: t1, a1:a1, t2: t2 });
        });

      });

    
});


module.exports = router;
