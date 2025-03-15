var express = require("express");
var bodyParser = require('body-parser')

var hello = express();
hello.set("views", __dirname+"/apps/views");
hello.set("view engine", "ejs");
hello.use(express.urlencoded({ extended: true }));  // Để phân tích dữ liệu từ form
hello.use(express.json());
hello.use("/static",express.static(__dirname+"/public"));
hello.use("/partial",express.static(__dirname+"/views/partial"));
var controller = require(__dirname + "/apps/controllers");
hello.use(controller);
hello.use(express.json());
hello.use(bodyParser.urlencoded({ extended: false }))
hello.use(bodyParser.json())


var server = hello.listen(3000, function(){
    console.log("server is running");
})