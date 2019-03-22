//Working

var http = require("http");

var options = {
  "method": "GET",
  "hostname": "127.0.0.1",
  "port": "3000",
  "path": "/api/restaurants",
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