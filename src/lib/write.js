const fs = require('fs');

const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

const events = require('../events/events.js');

const write = (file, text) => {
  events.emit('write', file);
  return writeFile(file, Buffer.from(text));
};

module.exports = write;
