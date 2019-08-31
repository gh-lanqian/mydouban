var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser")
var uE = bodyParser.urlencoded({
    extended: false
});
var crypto = require("crypto");
//token储存
//引用
var jwt = require("jsonwebtoken");

//创建集合
var dbCollection = mongoose.model("vips", {
    email: String,
    pwd: String,
    uname: String

})
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})

//注册路由
app.post("/post", uE,
    function (req, res) {
        var email = req.body.email;
        var pwd = req.body.pwd;
        var uname = req.body.uname;
        console.log(email + "----" + pwd + "--" + uname)
        // 13.开始加密
        var md5Pwd = crypto.createHash('md5').update(pwd).digest('hex');
        // 6.开始连接数据库
        mongoose.connect("mongodb://10.35.162.160:27017/douban", {
            useNewUrlParser: true
        }, function (err) {
            if (err) {
                console.log("数据库连接失败");
            } else {
                console.log("数据库ok");
                dbCollection.find({
                    email: email
                }).then((ok) => {
                    //两种情况
                    if (ok.length == 0) {
                        //不存在注册，数据存储
                        var userdemo = new dbCollection({
                            email,
                            pwd: md5Pwd,
                            uname
                        })
                        //    9.开始存
                        userdemo.save().then((ok) => {
                            res.send({
                                mes: "注册成功",
                                status: 200,
                                linkid: 1
                            })
                        }, (err) => {
                            res.send({
                                mes: "注册失败",
                                status: 500,
                                linkid: 0
                            })
                        })
                    } else if (ok.length > 0) {

                        //存在返回提醒
                        res.send({
                            mes: "注册失败",
                            status: 500,
                            linkid: 2
                        })
                    }
                }, (err) => {
                    res.send({
                        mes: "连接超时，请稍后再试",
                        status: 500,
                        linkid: 3
                    })
                })


            }
        })
    })
//登录路由
app.post("/login", uE, function (req, res) {
    //获取前端发来的数据
    var email = req.body.email;
    var pwd = req.body.pwd;
    //密码加密
    var newPwd = crypto.createHash('md5').update(pwd).digest('hex');

    mongoose.connect("mongodb://10.35.162.160:27017/douban", {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log("链接失败")
        } else {
            console.log("链接成功")
            dbCollection.find({
                email: email,
                pwd: newPwd
            }).then((ok) => {
                console.log(ok.length)
                //两种情况
                if (ok.length == 0) {
                    res.send({
                        mes: "登录失败",
                        status: 500,
                        linkid: 4
                    })
                } else if (ok.length > 0) {
                    //创建token
                    var token = {
                        loginok: true,
                        email
                    }
                    var mi = "adjiewiwg456uh453jkljk46trhdfwe"
                    var token = jwt.sign(token, mi)

                    res.send({
                        mes: "登录成功",
                        status: 200,
                        linkid: 5,
                        token
                    })
                }
            }, (err) => {
                res.send({
                    mes: "连接超时，请稍后再试",
                    status: 500,
                    linkid: 6
                })
            })
        }
    })
})

app.listen(3000);