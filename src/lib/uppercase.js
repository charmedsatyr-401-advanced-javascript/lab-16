'use strict';

const events = require('../events/events.js');

/**
 * @function
 * @name uppercase
 * @param data {buffer} The string or buffer to be transformed to uppercase
 **/
const uppercase = data => {
  try {
    const result = data.toString().toUpperCase();
    events.emit('uppercase');
    return result;
  } catch (err) {
    events.emit('error', err);
  }
};

module.exports = uppercase;
