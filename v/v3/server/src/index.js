/* Imports */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


/* Config */
const port = 3000;

/* Init */
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', '..', 'client')));

/* Data storage */
let idCounter = 1;
let todos = [];


/* Route handle */
const route = '/api/todos';
app.get(route, (req, res) => {
    res.send(todos);
});

app.post(route, (req, res) => {
    const todo = req.body;
    todo.id = idCounter++;
    todo.status = 'opened';
    todos.push(todo);
    res.status(201);
    res.send(todo);
});

app.patch(`${route}/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id === id);

    if(!todo){
        res.status(404);
        res.send({error: 'Not found!'});
        return;
    }

    const body = req.body;
    if(body.description){
        todo.description = body.description;
    }
    if(body.status){
        todo.status = body.status;
    }
    res.send(todo);
});

app.delete(`${route}/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter((todo) => todo.id !== id);
    res.send();
});

/* Start server */
app.listen(port, () => {
    console.log('Listening on port ' + port);
});