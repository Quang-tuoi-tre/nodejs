var express= require("express");
var router = express.Router();
router.use("/home", require(__dirname+"/homecontroller"));
// router.use("/product", require(__dirname+"/productcontroller"));
router.use("/contact", require(__dirname+"/contactcontroller"));
router.use("/shop", require(__dirname+"/shopcontroller"));
router.use("/vegetables", require(__dirname+"/vegetablescontroller"));
router.use("/about", require(__dirname+"/aboutcontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.use("/table", require(__dirname + "/admin/tablecontroller"));
// router.use("/product-manage", require(__dirname + "/admin/productmanage"));

router.use("/",  function(req,res){
    res.render("index.ejs");
});
module.exports= router;