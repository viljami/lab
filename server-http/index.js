var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var port = 9000;
var staticDir = '/public';

app.use('/', serveStatic(__dirname + '/' + staticDir));

app.get('/', function(req, res){
 res.send('hello world');
});

app.listen(port);

console.log('http://localhost:' + port);
