var express = require("express");
var router = express.Router();
var User = require("../../model/user")


 router.get("/login", function(req,res){
    res.render("admin/login");                                                                                                           
});

module.exports = router;