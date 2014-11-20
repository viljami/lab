var fs = require('fs');
var https = require('https');
var express = require('express');
var serveStatic = require('serve-static');

var app = express();
var port = 9000;
var staticDir = '/public';
var httpsOptions = {
  cert: fs.readFileSync('keys/test-user-cert.pem'),
  key: fs.readFileSync('keys/test-user'),
  // key: fs.readFileSync('keys/test-user.pub')
  // key: fs.readFileSync('keys/certreq.csr'),
  // cert: fs.readFileSync('keys/newcert.pem')
};

app.use('/', serveStatic(__dirname + '/' + staticDir));

app.get('/', function(req, res){
 res.send('hello world');
});

https.createServer(httpsOptions, app).listen(port);

console.log('https://localhost:' + port);
