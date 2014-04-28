var Store = require('Lawnchair');

var Arbiter = require('Arbiter').create();

Store.prototype.publish = Arbiter.publish;
Store.prototype.subscribe = Arbiter.subscribe;

module.exports = Store;