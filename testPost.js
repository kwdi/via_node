// Not working

var http = require("http");

var options = {
  "method": "POST",
  "hostname": "127.0.0.1",
  "port": "3000",
  "path": "/api/restaurants/5c8264790ba555001448f457",
  "headers": {
    "content-length": "774",
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

req.write(JSON.stringify({ location: { lat: '59.3130688', lng: '18.0844272' },
  _id: '5c8264790ba555001448f457',
  opening_hours:
   'Monday: Closed,Tuesday: 4:00 – 9:00 PM,Wednesday: 12:00 – 9:00 PM,Thursday: 12:00 – 9:00 PM,Friday: 12:00 – 11:00 PM,Saturday: 12:00 – 11:00 PM,Sunday: 12:00 – 8:00 PM',
  address: 'Skånegatan 87, 116 35 Stockholm, Sweden',
  phone_number: '08-642 20 60',
  icon:
   'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
  name: 'FLFL',
  rating: 3.9,
  google_maps_url: 'https://maps.google.com/?cid=7846619336429231074',
  website: 'http://www.flfl.se/',
  photo:
   'https://cdn.pixabay.com/photo/2015/03/26/10/07/restaurant-690975_1280.jpg',
  id: 8,
  __v: 0 }));
req.end();