const express = require('express');
const eventRouter = require('./eventRouter');
const acceptRouter = require('./acceptRouter');
const userRouter = require('./userRouter');
const app = express();

app.use(express.json());
app.use(function(req, res, next){
    console.log('Validating...');
    next();
});
app.use(function(req, res, next){
    console.log('Authenticating...');
    next();
});
app.use(function(req, res, next){
    console.log('Processing...');
    next();
});

//EVENT ENDPOINT SPECS START HERE
app.get('/api/events/:id', eventRouter.getEvent);
app.get('/api/events', eventRouter.getEvents);
app.post('/api/events', eventRouter.postEvent);
app.put('/api/events/:id', eventRouter.putEvent);
app.put('/api/events/disable/:id', eventRouter.disableEvent);
//COMMENTED DELETE UNTIL IF/WHEN SQL LOGIC ADDED.
//pp.delete('/api/events/:id', eventRouter.deleteEvent);
//EVENT ENDPOINT SPECS END HERE

//ACCEPT ENDPOINT SPECS START HERE
app.get('/api/accepts/:id', acceptRouter.getAccept);
app.get('/api/accepts', acceptRouter.getAccepts);
app.post('/api/accepts', acceptRouter.postAccept);
app.put('/api/accepts/:id', acceptRouter.putAccept);
app.put('/api/accepts/disable/:id', acceptRouter.disableAccept);
//COMMENTED DELETE UNTIL IF/WHEN SQL LOGIC ADDED.
//app.delete('/api/accepts/:id', acceptRouter.deleteAccept);
//ACCEPT ENDPOINT SPECS END HERE

//USER ENDPOINT SPECS START HERE
app.get('/api/users/:id', userRouter.getUser);
app.get('/api/users', userRouter.getUsers);
app.post('/api/users', userRouter.postUser);
app.put('/api/users/:id', userRouter.putUser);
app.put('/api/users/disable/:id', userRouter.disableUser);
//COMMENTED DELETE UNTIL IF/WHEN SQL LOGIC ADDED.
//app.delete('/api/users/:id', userRouter.deleteUser);
//USER ENDPOINT SPECS END HERE

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});