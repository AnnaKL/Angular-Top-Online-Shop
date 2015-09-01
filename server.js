var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.send('index.html');
});

server.listen(process.env.PORT || 4567, function(){
  console.log("Listening on port 4567");
});

module.exports = server;