// var arr = new Array();

// var ve=["Pumpkin","Ginher","Toma"];
// for(var i = 0; i<ve.length;i++){
//     console.log(ve[1]);
// }



// var a= 3;
// var b =4;
// var tong = a+b;
// console.log("Tổng: " + tong);

// function tong(a,b){
//     return a+b;
// }


// class Car{
//     color;
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//          tonghaiso(a,b) {
//             return tong=a+b;
//         }
// }

// var tongD = document.getElementById("tong");
// var p = document.createElement("p");
// p.innerHTML="chld";
// tongD.appendChild(p);
// tongD.style.color="red";

// var car = new Car("car 1", 2025);
// console.log(car);
// console.log(tong);

// function GetAsync(url,callbnack)
// {
//     var http= new XMLHttpRequest();
//     http.onreadystatechange=function(){
//         if(http.readyState ==4 && http.status==200) callbnack(http);
//     };
//     http.open("Get", url,true);
//     http.send(null);
// }

// GetAsync('https://picsum.photos/200/300',(data) =>{
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src',data.responseURL);
// })
// GetAsync('https://picsum.photos/200/300',(data) =>{
//     console.log(data);
//     document.getElementById('img_2').setAttribute('src',data.responseURL);
// })

// const promise = new Promise((resolve,reject) =>{
//     let condi= true;
//     if(condi=true){
//         setTimeout(()=>{
//             resolve('Success');
//         },3000)
//     }else{
//         reject('Error');
//     }
// });

// promise.then((data)=>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })


var express = require("express");
var hello = express();
var socketio = require("socket.io");
hello.set("views", __dirname+"/app/views");
hello.set("view engine", "ejs");
hello.use(express.urlencoded({ extended: true }));  // Để phân tích dữ liệu từ form
hello.use(express.json());
hello.use("/static",express.static(__dirname+"/public"));
hello.use("/partial",express.static(__dirname+"/views/partial"));
var controller = require(__dirname + "/app/controller");
hello.use(controller);

var server = hello.listen(3000, function(){
    console.log("server is running");
})

var io = socketio(server);
var socketcontroller = require("./app/controller/chatcontroller")(io);
