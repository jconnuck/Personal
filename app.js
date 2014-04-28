var express = require('express');
var sockjs  = require('sockjs');
var http    = require('http');

// 1. Echo sockjs server
var sockjs_opts = {sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js"};

var sockjs_echo = sockjs.createServer();
sockjs_echo.on('connection', function(conn) {
  console.log('new connection');

  conn.on('data', function(message) {
    console.log('message', message);

    conn.write(JSON.stringify({
      'message': message,
      'payload': { 'name': 'John' }
    }));
  });
});

// 2. Express server
var app = express(); /* express.createServer will not work here */
var server = http.createServer(app);

sockjs_echo.installHandlers(server);

app.use('/bower', express.static(__dirname + '/bower_modules'));

server.listen(9001);

module.exports = app;