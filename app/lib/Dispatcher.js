var Arbiter = require('Arbiter');

var Dispatcher = Arbiter.create();
var Components = Arbiter;

var sockjs = window.sockjs = new SockJS('http://localhost:9001');

Dispatcher.Sources = {
  USER: 'USER',
  SERVER: 'SERVER'
};

Dispatcher.Targets = {
  LOCAL: 'LOCAL',
  SERVER: 'SERVER'
};

var dispatchUserEvent = function(publisherData, message, subscriberData) {
  publisherData.source = Sources.USER;
  if (publisherData.target !== Targets.LOCAL) {
    var req = {
      event: message,
      data: publisherData  
    };
    sockjs.send(JSON.serialize(req));
  };
  Dispatcher.publish(message, publisherData);
};

var dispatchServerEvent = function(e) {
  if (sockjs.readyState === SockJS.OPEN, e.type === 'message') {
    var data = JSON.parse(e.data);
    var message = data.message;
    var payload = data.payload;
    Dispatcher.publish(message, payload);
  };
};

// listen to user actions
Components.subscribe('*', dispatchUserEvent);

// listen to server actions
sockjs.onmessage = dispatchServerEvent;

module.exports = Dispatcher;