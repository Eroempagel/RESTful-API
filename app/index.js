/*
 * Primary file for the API
 *
 */

// Dependencies
var http = require("http");
var url = require("url");

// The server shgould respond to all requests with a string
var server = http.createServer(function (req, res) {
  // Get the URL and parse it
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Send the response
  res.end("\r\n\r\nHello World\r\n");

  // log the request path
  console.log("Request received on path: " + trimmedPath);
});

// Start the server, and have it listen on port 3000
server.listen(3000, function () {
  console.log("The server is listening on port 3000 now");
});
