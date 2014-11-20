var fs = require('fs');
var https = require('https');
var express = require('express');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var port = 9000;
var staticDir = '/public';
var httpsOptions = {
  cert: fs.readFileSync('keys/test-user-cert.pem'),
  key: fs.readFileSync('keys/test-user'),
};

app.use(cookieParser());
app.use(session({secret: 'keyboard cat'}));
app.use('/', serveStatic(__dirname + '/' + staticDir));

app.get('/', function(req, res){
 res.send('hello world');
});

app.get('/login', function(req,res){
 req.session.loggedIn = true;
 res.send('loggedIn');
});

app.get('/islogged', function(req,res){
 if (req.session.loggedIn) return res.send('user has logged');
 res.send('user NOT logged in');
});

https.createServer(httpsOptions, app).listen(port);

console.log('https://localhost:' + port);
