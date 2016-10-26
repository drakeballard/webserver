var http = require ('http');

var GOODPORT = 7000;
var BADPORT = 7500;

//IMPORTANT
function handleRequest(request, response) {
  response.end('Looking Good BRO: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(GOODPORT, function() {
  console.log("This Server is listneing on: http://localhost:%s", PORT);
});


server.listen(BADPORT, function() {
  console.log("This Server is listneing on: http://localhost:%s", PORT);
});
