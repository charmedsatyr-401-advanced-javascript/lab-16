'use strict';

const fs = require('fs');

const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const events = require('../events/events.js');

/**
 * @function
 * @name read
 * @param file {path} The path to a file on the filesystem
 **/
const read = file => {
  try {
    events.emit('read', file);
    return readFile(file);
  } catch (err) {
    events.emit('error', err);
  }
};

module.exports = read;
