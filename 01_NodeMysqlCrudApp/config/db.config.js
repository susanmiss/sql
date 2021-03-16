'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Su2004queromuito',
    database: 'node_mysql_crud_db'
});
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
    var sql = "CREATE  TABLE IF NOT EXISTS `employees` ( id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), phone VARCHAR(50), organization VARCHAR(255), designation VARCHAR(100), salary DECIMAL(11,2))ENGINE = InnoDB";
    dbConn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    var sqlI = "INSERT INTO employees ( first_name, last_name, email, phone, organization, designation, salary ) VALUES ( 'John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00')";
    dbConn.query(sqlI, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

});
module.exports = dbConn;