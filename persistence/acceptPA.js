const mysqlConnection = require('./mysqlConnection');
const connection = mysqlConnection.connection;

function querySingleAcceptById(id) {
    console.log('querySingleAcceptById id = ' + id);
    return new Promise(function (resolve, reject) {
        try {
            connection.query("SELECT * FROM accepts WHERE id = ?",
                [
                    id
                ],
                function (error, results, fields) {
                    if (error) {
                        console.log('querySingleAcceptById error = ' + error);
                        reject(error);
                    } else {
                        console.log('querySingleAcceptById results = ' + JSON.stringify(results));
                        resolve(results);
                    }
                });
        } catch (e) {
            console.log('querySingleAcceptById error = ' + e);
            reject(e);
        }
    });
}

function insertAccept(acceptJson) {
    console.log('insertAccept insertEvent = ' + JSON.stringify(acceptJson));
    return new Promise(function (resolve, reject) {
        try {
            connection.query("INSERT INTO accepts (status, comment, userId, eventId) " +
            "VALUES (?, ?, ?, ?)",
            [
                acceptJson.status,
                acceptJson.comment,
                acceptJson.userId,
                acceptJson.eventId
            ],
            function (error, results) {
                if (error) {
                    console.log('insertAccept error = ' + error);
                    reject(error);
                } else {
                    console.log('insertAccept results = ' + JSON.stringify(results));
                    resolve(results);
                }
            });
        } catch (e) {
            console.log('insertAccept error = ' + e);
            reject(e);
        }
    });
}

function updateSingleAccept(id, acceptJson) {
    console.log('updateSingleAccept id = ' + id + ', acceptJson = ' + acceptJson);
    return new Promise(function (resolve, reject) {
        try {
            const sql = "UPDATE accepts SET " +
            "status = ?, " +
            "comment = ?, " +
            "userId = ?, " +
            "eventId = ? " +
            "WHERE id = ?";
            connection.query(sql,
            [
                acceptJson.status,
                acceptJson.comment,
                acceptJson.userId,
                acceptJson.eventId,
                id
            ],
            function (error, results) {
                if (error) {
                    console.log('updateSingleAccept error = ' + error);
                    reject(error);
                } else {
                    console.log('updateSingleAccept results = ' + results);
                    resolve(results);
                }
            });
        } catch (e) {
            console.log('updateSingleAccept error = ' + e);
            reject(e);
        }
    });
}

//TO-DO: Do not delete event, update status
function deleteSingleAcceptById(id) {
    console.log('deleteSingleAcceptById id = ' + id);
    return new Promise(function (resolve, reject) {
        try {
            connection.query("DELETE FROM accepts WHERE id = ?",
        [
            id
        ],
        function (error, results) {
            if (error) {
                console.log('deleteSingleAcceptById error = ' + error);
                reject(error);
            } else {
                console.log('deleteSingleAcceptById results = ' + results);
                resolve(results);
            }
        });
        } catch (e) {
            console.log('deleteSingleAcceptById error = ' + e);
            reject(e);
        }
    });    
}

module.exports = {
    querySingleAcceptById: querySingleAcceptById,
    insertAccept: insertAccept,
    updateSingleAccept: updateSingleAccept,
    deleteSingleAcceptById: deleteSingleAcceptById
}