var express = require("express");
var router = express.Router();
// var User = require("../../model/user")


router.get("/", function(req,res){
  res.render("admin/productmanage.ejs");
    
});

module.exports= router;