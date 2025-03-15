var express = require("express");
var router = express.Router();
// var User = require("../../model/user")


router.get("/", function(req,res){
    res.render("admin/table"); 
    
});

// router.get("/user", function(req,res){
//      res.render("admin/userManage");                                                                                                           
//  });

//  router.get("/product-manage", function(req,res){
//     res.render("admin/productmanage");                                                                                                           
// });

module.exports = router;