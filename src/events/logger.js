'use strict';

const events = require('./events');

events.on('read', handleRead);
events.on('uppercase', handleUppercase);
events.on('write', handleWrite);
events.on('alter', handleAlter);
events.on('error', handleError);

/**
 * @function
 * @name handleRead
 * @param payload {string} A file name
 */
function handleRead(payload) {
  console.log(`Read ${payload}...`);
}

/**
 * @function
 * @name handleRead
 */
function handleUppercase() {
  console.log(`Uppercased some text!`);
}

/**
 * @function
 * @name handleWrite
 * @param payload {string} A file name
 */
function handleWrite(payload) {
  console.log(`Wrote to ${payload}...`);
}

/**
 * @function
 * @name handleAlter
 * @param payload {string} A file name
 */
function handleAlter(payload) {
  console.log(`Altered file ${payload}...`);
}

/**
 * @function
 * @name handleError
 * @param payload {object} An error object
 */
function handleError(payload) {
  throw payload;
}

module.exports = { handleRead, handleUppercase, handleWrite, handleAlter, handleError };
