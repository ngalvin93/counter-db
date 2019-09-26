const express = require('express');
const counter = require('./counter.js')
var app = express();

app.use(express.static(__dirname + '/public'))

app.post('/increment', function (request, response, next) {
    counter.count++;
    const value = counter.count.toString();
    response.send(value);
    next();
})

app.post('/decrement', function (request, response, next) {
    counter.count--;
    const value = counter.count.toString();
    response.send(value);
    next();
})

app.get('/value', function (request, response, next) {
    const value = counter.count.toString();
    response.send(value);
    next();
})

app.post('/reset', function (request, response, next) {
    counter.count = 0
    const value = counter.count.toString();
    response.send(value)
    next()
})

app.listen(3000, () => console.log('Server is live.'))