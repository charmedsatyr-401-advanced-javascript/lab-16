'use strict';

const events = require('../events/events.js');

const uppercase = data => {
  const result = data.toString().toUpperCase();
  events.emit('uppercase');
  return result;
};

module.exports = uppercase;
