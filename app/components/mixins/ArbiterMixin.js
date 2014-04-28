/** @jsx React.DOM */

var Components = require('Arbiter');

/** hooks react components into to pub/sub events */

var ArbiterMixin = {
  publish: Components.publish
};

module.exports = ArbiterMixin;