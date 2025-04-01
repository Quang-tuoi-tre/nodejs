var express= require("express");
var router= express.Router();
router.use("/",function(req,res){
    // res.json({"message":"this is product page"});
    res.render("product.ejs");

});
router.post("/test-event", async function(req,res){
    const orderData = { event: "test chat event", data: `Event 100` };
    global.eventBus.emit("newOrder", null,orderData);
    res.json({status:"ok"});
});


module.exports= router;