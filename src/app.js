'use strict';

const events = require('./events/events.js');
require('./events/logger.js');

const read = require('./lib/read.js');
const uppercase = require('./lib/uppercase.js');
const write = require('./lib/write.js');

/**
 * @function
 * @name alterFile
 * @param file {path} The path to a file on the filesystem
 */
const alterFile = async file => {
  try {
    const buffer = await read(file);
    const modified = await uppercase(buffer);
    write(file, modified);
    events.emit('alter', file);
  } catch (err) {
    events.emit('error', file);
  }
};

module.exports = alterFile;
