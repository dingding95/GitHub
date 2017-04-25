/**
 * Created by dllo on 17/4/24.
 */

var mysql = require("mysql");
var express = require("express");
var username = '';
var userPassword = '';
var resultStr = '';

var options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'HTML5',
    charset:'utf8'
}





//创建路由的步骤
// 1.引入express
// 2.通过express创建路由
var router = express.Router();
var express = require('express');
// 3.路由访问，回调函数
router.post('/',function (req,res) {

    username = req.body.username;
    userPassword = req.body.userPassword;

    console.log(username);
    console.log(userPassword);



    var pool = mysql.createPool(options);
    var formatSQL = 'SELECT * FROM user WHERE ?? = ? AND ?? = ?';
    var sets = ['userName',username,'userPassword',userPassword];
    var final = mysql.format(formatSQL,sets);

    console.log('finalSQL:'+final);

    pool.getConnection(function (error,connection) {
        connection.query(final,function (error,results) {

            if(error){
                console.log('查询失败');
                console.error(error);
            }else {
                console.log('查询成功');
                if(results){
                    // resultStr = JSON.stringify(results);
                    if(results.length == 0){
                        res.send('登录失败');
                    }else{
                        res.send('登录成功');
                    }
                }
            }
            connection.release();
        });
    });
});



// 4.模块导出 路由
module.exports = router;