
const _DATABASE_HOST_SERVER = '127.0.0.1';
const _DATABASE_USER = 'root';
const _MYSQL_PASSWORD = 'INSERT PASSWORD HERE';
//const _DATABASE_NAME = 'new_schema9';
const _DATABASE_NAME = 'NighAppDB1';


const mysql = require('mysql');

const connection = mysql.createConnection({
    host: _DATABASE_HOST_SERVER,
    user: _DATABASE_USER,
    password: _MYSQL_PASSWORD,
    database: _DATABASE_NAME
});

connection.connect(function (error) {
    if (error) {
        console.log('connection unsuccessful.');
        console.log('error = ' + error);
        throw error;
    } else {
        console.log('connection successful.');
    }
});

connection.query('use NighAppDB1');

module.exports = {
    connection: connection
}