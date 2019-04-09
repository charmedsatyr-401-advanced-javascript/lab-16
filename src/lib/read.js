'use strict';

const fs = require('fs');

const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const events = require('../events/events.js');

const read = file => {
  events.emit('read', file);
  return readFile(file);
};

module.exports = read;
