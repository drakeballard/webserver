// npm package
var http = require ('http');

//declar two variables for the port
var GOODPORT = 7000;
var BADPORT = 7500;

//2 functions that handle either for good and bad
function handleRequest1(request, response) {
  response.end('Looking Good BRO: ' + request.url);
}

function handleRequest2(request, response) {
  response.end('Looking shitty bro: ' + request.url);
}

//create servers from the npm packages
var gserver = http.createServer(handleRequest1);
var bserver = http.createServer(handleRequest2);

//start spinning the servers
gserver.listen(GOODPORT, function() {
  console.log("This Server is listneing on: http://localhost:%s", GOODPORT);
});

bserver.listen(BADPORT, function() {
  console.log("This Server is listneing on: http://localhost:%s", BADPORT);
});
