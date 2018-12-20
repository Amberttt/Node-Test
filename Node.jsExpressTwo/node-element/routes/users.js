var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function (req,res,next) {
  var user = new User();
  // var user = null;
  // 解释：
  // 获取url参数 依赖于url模块 使用前需要使用  require('url')
  // var params = URL.parse(req.url, true).query;
  var params = URL.parse(req.url, true).query;
  if (params.id == '1') {
    // user = new User('login1',1,'北京1');
    user.name = 'lign1';
    user.age = 1;
    user.city = '北京市1';
  } else if (params.id == '2') {
    user.name = 'lign2';
    user.age = 2;
    user.city = '北京市2';
  } else if (params.id == '3') {
    user.name = 'lig3';
    user.age = 3;
    user.city = '北京市3';
  } else {
    user.name = 'lign4';
    user.age = 4;
    user.city = '北京市4';
  }
  var response = {
    status: 1,
    data: user
  }
  res.send(JSON.stringify(response));
})

module.exports = router;
