//const express = require('express');
const eventPa = require('../persistence/eventPA');

async function getEvent(req, res){
    console.log('get event');
    let id = req.params.id;
    try{
        let result = await eventPa.querySingleEventById(id);
        console.log('getEvent result = '+JSON.stringify(result));
        res.send(result);
    } catch(e){
        console.log('getEvent error = '+error);
    } finally {

    }
    
};
async function getEvents(req, res){
    console.log('TODO: get events');
    res.send('TODO: get event response');
};
async function postEvent(req, res){
    console.log('post event');
    let body = req.body;
    //console.log('post event req = '+JSON.stringify(req));
    //console.log('post event body = '+JSON.stringify(body));
    let result = await eventPa.insertEvent(body);
    console.log('post event result = ');
    console.log(result);
    res.send(result);
};
async function putEvent(req, res){
    console.log('put event');
    let id = req.params.id;
    let body = req.body;
    console.log('put event body = '+JSON.stringify(body));
    let result = await eventPa.updateSingleEvent(id, body);
    res.send(result);
};
async function disableEvent(req, res){
    console.log('disable event');
    let id = req.params.id;
    let body = req.body;
    console.log('disable event body = '+JSON.stringify(body));
    let result = await eventPa.disableSingleEventById(id);
    res.send(result);
};
async function deleteEvent(req, res){
    console.log('delete event');
    let id = req.params.id;
    let result = await eventPa.deleteSingleEventById(id);
    res.send(result);
};

module.exports = {
    getEvent : getEvent,
    getEvents : getEvents,
    postEvent : postEvent,
    putEvent : putEvent,
    disableEvent : disableEvent,
    deleteEvent : deleteEvent

}