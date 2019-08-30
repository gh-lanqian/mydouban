var express=require("express");
var app=express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser")
var uE=bodyParser.urlencoded({extended:false});
//创建集合
var dbCollection = mongoose.model("vips", {
    
})
var dbCollection1 = mongoose.model("vips", {
    
})
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})
app.get("/get",function(req,res){
    mongoose.connect("mongodb://10.35.162.160:27017/douban",{useNewUrlParser:true},function(err){
        if (err) {
            console.log(err)            
            res.send({mes:"链接失败",status:500,})
        }else{
            console.log("链接成功")
            dbCollection.find().then((ok)=>{
                res.send({mes:"查询成功",status:200,obj:ok})
            },(err)=>{
                res.send({mes:"查询失败",status:500})
            })
        }
    })
})
app.get("/post",uE,function(req,res){
    mongoose.connect("mongodb://10.35.162.160:27017/douban",{useNewUrlParser:true},function(err){
        if (err) {
            console.log(err)            
            res.send({mes:"链接失败",status:500,})
        }else{
            console.log("链接成功")
            dbCollection1.find().then((ok)=>{
                res.send({mes:"查询成功",status:200,obj:ok})
            },(err)=>{
                res.send({mes:"查询失败",status:500})
            })
        }
    })
})
app.listen(3000);