const express = require('express');
const app = express();
const moment = require('moment')
// 导入cors模块,该模块为跨域所用
const cors = require('cors');
app.use(cors());

// 解析表单的插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// 创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',  // 数据库地址
    user: 'root',   // 账号
    password: 'rootAdmin',  // 密码
    database: 'node_system',    // 库名
    multipleStatements: true    // 允许执行多条语句
})

// get列表
app.get('/api/getList', (req, res) => {
    const sqlStr = 'select * from user '
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({ code: 1, data: '资料不存在', affextedRows: 0 })
        res.json({ code: 200, data: results, affextedRows: results.affextedRows })
    })
})

// 按条件查询
app.get('/api/getlistdetl', (req, res) => {
    const number = req.query.number
    const sqlStr = 'select * from user where user=?'
    conn.query(sqlStr, number, (err, results) => {
        if (err) return res.json({ code: 1, data: '资料不存在', affextedRows: 0 })
        res.json({ code: 200, data: results, affextedRows: results.affextedRows })
    })
})

// 添加数据
app.post('/api/addcard', (req, res) => {
    const user = req.body
    user.ctime = moment().format('YYYY-MM-DD HH:mm:ss') // 格式化日期
    const sqlStr = 'insert into bank set ?'
    conn.query(sqlStr, user, (err, results) => {
        if (err) return res.json({ code: 1, data: err, affectedRows: 0 })
        res.json({ code: 0, data: '恭喜成功', affectedRows: results.affectedRows })
    })
})

// 登录
app.get('/api/login', (req, res) => {
    const user = req.query.user
    const pwd = req.query.pwd
    const sqlStr = 'select * from user where user=?'
    conn.query(sqlStr, user, (err, results) => {
        if (err) {
            return res.json({
                code: 1,
                data: '资料不存在',
                msg: '资料不存在',
                affextedRows: 0
            })
        }else if(results.length){
            res.json({
                code: 200,
                data: results[0],
                msg: null,
                affextedRows: results.affextedRows
            })
        }else{
            res.json({
                code: 200,
                data: null,
                msg: '用户不存在',
                affextedRows: results.affextedRows
            })
        }
    })
})

// 端口监听
app.listen(3000, () => {
    console.log('正在监听端口3000 \n    http://192.168.1.97:3000');     // 换成你的ip,本机ip查询用cmd=>ipconfig
})