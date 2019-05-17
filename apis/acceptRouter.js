//const express = require('express');
const acceptPA = require('../persistence/acceptPA');

async function getAccept(req, res){
    console.log('get accept');
    let id = req.params.id;
    try{
        let result = await acceptPA.querySingleAcceptById(id);
        console.log('getAccept result = '+JSON.stringify(result));
        res.send(result);
    } catch(e){
        console.log('getAccept error = '+error);
    } finally {

    }
    
};
async function getAccepts(req, res){
    console.log('TODO: get accepts');
    res.send('TODO: get accepts response');
};
async function postAccept(req, res){
    console.log('post accept');
    let body = req.body;
    let result = await acceptPA.insertAccept(body);
    console.log('post accept result = ');
    console.log(result);
    res.send(result);
};
async function putAccept(req, res){
    console.log('put accept');
    let id = req.params.id;
    let body = req.body;
    console.log('put accept body = '+JSON.stringify(body));
    let result = await acceptPA.updateSingleAccept(id, body);
    res.send(result);
};
async function disableAccept(req, res){
    console.log('disable accept');
    let id = req.params.id;
    let body = req.body;
    console.log('disable accept body = '+JSON.stringify(body));
    let result = await acceptPA.disableSingleAcceptById(id);
    res.send(result);
};
async function deleteAccept(req, res){
    console.log('delete accept');
    let id = req.params.id;
    let result = await acceptPA.deleteSingleAcceptById(id);
    res.send(result);
};

module.exports = {
    getAccept : getAccept,
    getAccepts : getAccepts,
    postAccept : postAccept,
    putAccept : putAccept,
    disableAccept : disableAccept,
    deleteAccept : deleteAccept
}