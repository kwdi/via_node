// Not working

var http = require("http");

var options = {
  "method": "DELETE",
  "hostname": "127.0.0.1",
  "port": "3000",
  "path": "/api/restaurants/5c8264790ba555001448f457",
  "headers": {
    "content-length": "0",
    "content-type": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();