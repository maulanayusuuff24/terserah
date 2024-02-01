var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From hi" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 2402);
module.exports = app;
