/**
 * Created by dllo on 17/4/24.
 */

//创建路由的步骤
// 1.引入express
var express = require('express');
// 2.通过express创建路由
var router = express.Router();
// 3.路由访问，回调函数
router.get('/',function (req,res) {
    res.render('login');
});
// 4.模块导出 路由
module.exports = router;



