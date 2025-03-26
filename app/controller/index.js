


var express= require("express");
var router = express.Router();
router.use("/home", require(__dirname+"/homecontroller"));
router.use("/product", require(__dirname+"/productcontroller"));
router.use("/service", require(__dirname+"/servicecontroller"));
router.use("/about", require(__dirname+"/aboutcontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.use("/authenticate", require(__dirname + "/admin/authenticatecontroller"));
router.use("/product-manage", require(__dirname + "/admin/productmanage"));
router.get("/chat", function(req,res){
    res.render("chat");
});


router.use("/",  function(req,res){
    res.render("index.ejs");
});
module.exports= router;