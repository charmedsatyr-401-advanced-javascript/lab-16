const fs = require('fs');

const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

const events = require('../events/events.js');

/**
 * @function
 * @name write
 * @param file {path} The path to a file on the filesystem
 * @param data {buffer} The data to write to the file
 **/
const write = (file, text) => {
  try {
    events.emit('write', file);
    return writeFile(file, Buffer.from(text));
  } catch (err) {
    events.emit('error', err);
  }
};

module.exports = write;
