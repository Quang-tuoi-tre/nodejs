var express= require("express");
var router= express.Router();
router.use("/",function(req,res){
    // res.json({"message":"this is home page"});
    res.render("index.ejs")
});

module.exports= router;