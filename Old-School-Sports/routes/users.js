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
  
  db.User
    .authenticate(user.email, user.password)
    .then(function (user) {
  
          req.login(user);
  
          res.redirect("/"); // redirect to user profile
      });
});


module.exports = router;
