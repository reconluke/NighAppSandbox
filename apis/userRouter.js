//const express = require('express');
const userPA = require('../persistence/userPA');

async function getUser(req, res){
    console.log('get user');
    let id = req.params.id;
    try{
        let result = await userPA.querySingleUserById(id);
        console.log('getUser result = '+JSON.stringify(result));
        res.send(result);
    } catch(e){
        console.log('getUser error = '+error);
    } finally {

    }
    
};
async function getUsers(req, res){
    console.log('TODO: get users');
    res.send('TODO: get users response');
};
async function postUser(req, res){
    console.log('post user');
    let body = req.body;
    let result = await userPA.insertUser(body);
    console.log('post user result = ');
    console.log(result);
    res.send(result);
};
async function putUser(req, res){
    console.log('put user');
    let id = req.params.id;
    let body = req.body;
    console.log('put user body = '+JSON.stringify(body));
    let result = await userPA.updateSingleUser(id, body);
    res.send(result);
};
async function disableUser(req, res){
    console.log('disable user');
    let id = req.params.id;
    let body = req.body;
    console.log('disable user body = '+JSON.stringify(body));
    let result = await userPA.disableSingleUserById(id);
    res.send(result);
};
async function deleteUser(req, res){
    console.log('delete user');
    let id = req.params.id;
    let result = await userPA.deleteSingleUserById(id);
    res.send(result);
};

module.exports = {
    getUser : getUser,
    getUsers : getUsers,
    postUser : postUser,
    putUser : putUser,
    disableUser : disableUser,
    deleteUser : deleteUser
}