var express = require('express');

var app = express();

app.use(express.static('ciblab')); // myApp will be the same folder name.

app.get('/', function (req, res, next) {
    res.redirect('/');
});

app.listen(7788, 'localhost');

console.log('MyProject Server is Listening on port 7788');