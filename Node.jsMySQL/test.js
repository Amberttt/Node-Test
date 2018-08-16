var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootAdmin',
    database: 'mysql_node'
});

connection.connect();

connection.query('SELECT * from user where name = "xiaoming"', function (error, results, fields) {
    if (error) throw error;
    console.log(results,'---');
    // console.log(results[0],'-=-');
    // console.log(fields);
    // console.log('The solution is: ', results[0].solution);
});