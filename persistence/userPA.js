const mysqlConnection = require('./mysqlConnection');
const connection = mysqlConnection.connection;

function querySingleUserById(id) {
    console.log('querySingleUserById id = ' + id);
    return new Promise(function (resolve, reject) {
        try {
            connection.query("SELECT * FROM users WHERE id = ?",
                [
                    id
                ],
                function (error, results, fields) {
                    if (error) {
                        console.log('querySingleUserById error = ' + error);
                        reject(error);
                    } else {
                        console.log('querySingleUserById results = ' + JSON.stringify(results));
                        resolve(results);
                    }
                });
        } catch (e) {
            console.log('querySingleUserById error = ' + e);
            reject(e);
        }
    });
}

function insertUser(userJson) {
    console.log('insertUser userJson = ' + JSON.stringify(userJson));
    return new Promise(function (resolve, reject) {
        try {
            connection.query("INSERT INTO users (username) " +
            "VALUES (?)",
            [
                userJson.username
            ],
            function (error, results) {
                if (error) {
                    console.log('insertUser error = ' + error);
                    reject(error);
                } else {
                    console.log('insertUser results = ' + JSON.stringify(results));
                    resolve(results);
                }
            });
        } catch (e) {
            console.log('insertUser error = ' + e);
            reject(e);
        }
    });
}

function updateSingleUser(id, userJson) {
    console.log('updateSingleUser id = ' + id + ', userJson = ' + JSON.stringify(userJson));
    return new Promise(function (resolve, reject) {
        try {
            const sql = "UPDATE users SET " +
            "username = ? " +
            "WHERE id = ?";
            connection.query(sql,
            [
                userJson.username,
                id
            ],
            function (error, results) {
                if (error) {
                    console.log('updateSingleUser error = ' + error);
                    reject(error);
                } else {
                    console.log('updateSingleUser results = ' + results);
                    resolve(results);
                }
            });
        } catch (e) {
            console.log('updateSingleUser error = ' + e);
            reject(e);
        }
    });
}

function disableSingleUserById(id) {
    return new Promise(function (resolve, reject) {
        try {
            const sql = "UPDATE users SET " +
            "status = 'DISABLED' " +
            "WHERE id = ?";
            connection.query(sql,
            [
                id
            ],
            function (error, results) {
                if (error) {
                    console.log('disableSingleUserById error = ' + error);
                    reject(error);
                } else {
                    console.log('disableSingleUserById results = ' + results);
                    resolve(results);
                }
            });
        } catch (e) {
            console.log('disableSingleUserById error = ' + e);
            reject(e);
        }
    });
}

//TO-DO: Do not delete User, update status to inactive
function deleteSingleUserById(id) {
    console.log('deleteSingleUserById id = ' + id);
    return new Promise(function (resolve, reject) {
        try {
            connection.query("DELETE FROM users WHERE id = ?",
        [
            id
        ],
        function (error, results) {
            if (error) {
                console.log('deleteSingleUserById error = ' + error);
                reject(error);
            } else {
                console.log('deleteSingleUserById results = ' + results);
                resolve(results);
            }
        });
        } catch (e) {
            console.log('deleteSingleUserById error = ' + e);
            reject(e);
        }
    });    
}

module.exports = {
    querySingleUserById: querySingleUserById,
    insertUser: insertUser,
    updateSingleUser: updateSingleUser,
    disableSingleUserById: disableSingleUserById,
    deleteSingleUserById: deleteSingleUserById
}