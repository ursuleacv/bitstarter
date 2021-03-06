var express = require('express');
var fs = require('fs');
var home = 'index.html'

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer(fs.readFileSync(home), "utf-8");
    response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
