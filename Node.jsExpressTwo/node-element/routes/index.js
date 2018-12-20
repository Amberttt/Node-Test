var express = require('express');
var router = express.Router();

// 定义一个路由的基本格式为：
// app.METHOD(PATH, HANDLER)其中：
// app 是 express 的实例。
// METHOD是 HTTP 请求方法。
// PATH 是服务器上的路径。
// HANDLER 是在路由匹配时执行的函数。
// 以上的定义代表
// 在根路由 (/) 上（应用程序的主页）对 GET 请求进行响应

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
