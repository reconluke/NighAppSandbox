/*
const mysql = require('mysql');

var connection = mysql.createConnection({
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
*/

const mysqlConnection = require('./mysqlConnection');
const connection = mysqlConnection.connection;

//

function querySingleEventById(id) {
    console.log('querySingleEventById id = ' + id);
    return new Promise(function (resolve, reject) {
        try {
            connection.query("SELECT * FROM events WHERE id = ?",
                [
                    id
                ],
                function (error, results, fields) {
                    if (error) {
                        console.log('querySingleEventById error = ' + error);
                        reject(error);
                    } else {
                        console.log('querySingleEventById results = ' + JSON.stringify(results));
                        resolve(results);
                    }
                });
        } catch (e) {
            console.log('querySingleEventById error = ' + e);
            reject(e);
        }
    });
}

function insertEvent(eventJson) {
    console.log('insertEvent insertEvent = ' + JSON.stringify(eventJson));
    return new Promise(function (resolve, reject) {
        try {
            connection.query("INSERT INTO events (latitude, longitude, description, category, status, userId) " +
            "VALUES (?, ?, ?, ?, ?, ?)",
            [
                //eventJson.ownerId,
                eventJson.latitude,
                eventJson.longitude,
                //eventJson.createDatetime,
                eventJson.description,
                eventJson.category,
                eventJson.status,
                eventJson.userId
            ],
            function (error, results) {
                if (error) {
                    console.log('insertEvent error = ' + error);
                    reject(error);
                } else {
                    console.log('insertEvent results = ' + JSON.stringify(results));
                    resolve(results);
                }
            });
        } catch (e) {
            console.log('insertEvent error = ' + e);
            reject(e);
        }
    });
}

function updateSingleEvent(id, eventJson) {
    console.log('updateSingleEvent id = ' + id + ', eventJson = ' + eventJson);
    return new Promise(function (resolve, reject) {
        try {
            const sql = "UPDATE events SET " +
            //"ownerId = ?, " +
            "latitude = ?, " +
            "longitude = ?, " +
            "description = ?, " +
            "category = ?, " +
            "status = ? " +
            "WHERE id = ?";
            console.log('update s e sql = '+sql);
            connection.query(sql,
            [
                //ownerId: eventJson.ownerId,
                eventJson.latitude,
                eventJson.longitude,
                eventJson.description,
                eventJson.category,
                eventJson.status,
                id
            ],
            function (error, results) {
                if (error) {
                    console.log('updateSingleEvent error = ' + error);
                    reject(error);
                } else {
                    console.log('updateSingleEvent results = ' + results);
                    resolve(results);
                }
            });
        } catch (e) {
            console.log('updateSingleEvent error = ' + e);
            reject(e);
        }
    });    
}

//TO-DO: Do not delete event, update status
function deleteSingleEventById(id) {
    console.log('deleteSingleEventById id = ' + id);
    return new Promise(function (resolve, reject) {
        try {
            connection.query("DELETE FROM events WHERE id = ?",
        [
            id
        ],
        function (error, results) {
            if (error) {
                console.log('deleteSingleEventById error = ' + error);
                reject(error);
            } else {
                console.log('deleteSingleEventById results = ' + results);
                resolve(results);
            }
        });
        } catch (e) {
            console.log('updateSingleEvent error = ' + e);
            reject(e);
        }
    });    
}

module.exports = {
    insertEvent: insertEvent,
    querySingleEventById: querySingleEventById,
    updateSingleEvent: updateSingleEvent,
    deleteSingleEventById: deleteSingleEventById
}