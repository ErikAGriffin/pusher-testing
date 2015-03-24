var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));


var pusherConfig;

try {
  pusherConfig = require('./push-config');
} catch(e) {
  console.log("Pusher development not found, using Heroku credentials");
  config = {
    pusherAppId: process.env.PUSHER_APP_ID,
    pusherKey: process.env.PUSHER_KEY,
    pusherSecret: process.env.PUSHER_SECRET
  };
}


var Pusher = require('pusher');
var pusher = new Pusher({
  appId: pusherConfig.pusherAppId,
  key: pusherConfig.pusherKey,
  secret: pusherConfig.pusherSecret
});






server.listen(port, function() {

  console.log("Listening on port " + port);

});


module.exports = server;
