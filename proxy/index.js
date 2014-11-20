var connect = require('connect');
var http = require('http');
var httpProxy = require('http-proxy');

var port = 3000;
var proxyOptions = {
 target:'https://localhost:9000',
 secure: false
};

var app = connect()
var proxy = httpProxy.createProxyServer(proxyOptions);

proxy.on('error', function(e) {
  if (e) console.log(e);
});


app.use('/', function(req, res, next){
 proxy.web(req,res, proxyOptions);
});


http.createServer(app).listen(port);

console.log('http://localhost:' + port);
