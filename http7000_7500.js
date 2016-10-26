var http = require ('http');

var GOODPORT = 7000;
var BADPORT = 7500;

//IMPORTANT
function handleRequest1(request, response) {
  response.end('Looking Good BRO: ' + request.url);
}

function handleRequest2(request, response) {
  response.end('Looking shitty bro: ' + request.url);
}

var gserver = http.createServer(handleRequest1);


var bserver = http.createServer(handleRequest2);


gserver.listen(GOODPORT, function() {
  console.log("This Server is listneing on: http://localhost:%s", GOODPORT);
});


bserver.listen(BADPORT, function() {
  console.log("This Server is listneing on: http://localhost:%s", BADPORT);
});
