var express = require("express");
var router = express.Router();
var User = require("../../model/user")


router.get("/", function(req,res){
   res.json({"message": "this is admin page"});
    
});
router.get("/user", function(req,res){
     res.render("admin/userManage");                                                                                                           
 });

 router.get("/product-manage", function(req,res){
    res.render("admin/productmanage");                                                                                                           
});



//  router.post("/addUser", function(req, res) {
//     // Giả sử bạn đã lấy dữ liệu từ form
//     const { username, email, password } = req.body;

//     // Tạo một đối tượng User mới (có thể lưu vào cơ sở dữ liệu)
//     var newUser = new User();
//     newUser.name = username;
//     newUser.email = email;
//     newUser.password = password;

//     // Giả lập lưu người dùng vào cơ sở dữ liệu
//     console.log("User added:", newUser);

//     // Sau khi thêm người dùng, chuyển hướng đến trang quản lý người dùng
//     res.redirect("/user");  // Chuyển hướng về trang quản lý người dùng
// });
//  router.get("/getuserlist", function(req,res){
//     var userList = new Array();
//     for(var i = 0; i< 10;i++){
//         var us = new User();
//         us.id = (i+1);
//         us.name = "name " + (i+1);
//         userList.push(us);
//     }
//     res.json(userList);                                                                                                          
// });
// // Định nghĩa route POST để thêm người dùng mới



module.exports = router;