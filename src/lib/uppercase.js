'use strict';

const events = require('../events/events.js');

/**
 * @function
 * @name uppercase
 * @param data {buffer} The string or buffer to be transformed to uppercase
 **/
const uppercase = data => {
  const result = data.toString().toUpperCase();
  events.emit('uppercase');
  return result;
};

module.exports = uppercase;
