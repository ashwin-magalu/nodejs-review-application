var http = require("http");
var url = require("url");

function startserver(route, handle) {
  //route comes from app.js, whic inturn gets it through router.js
  //Wrapping code using function
  function onRequest(request, response) {
    var reviewData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for " + pathname);
    request.setEncoding("UTF8");
    request.addListener("data", function (chunk) {
      reviewData += chunk;
    });
    request.addListener("end", function () {
      route(handle, pathname, response, reviewData);
    });
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server Started on the localhost port 8888");
}
exports.startserver = startserver;
