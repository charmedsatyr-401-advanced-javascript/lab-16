'use strict';

const events = require('./events');

events.on('read', handleRead);
events.on('uppercase', handleUppercase);
events.on('write', handleWrite);
events.on('alter', handleAlter);
events.on('error', handleError);

function handleRead(payload) {
  console.log(`Read ${payload}...`);
}

function handleUppercase() {
  console.log(`Uppercased some text!`);
}

function handleWrite(payload) {
  console.log(`Wrote to ${payload}...`);
}

function handleAlter(payload) {
  console.log(`Altered file ${payload}...`);
}

function handleError(payload) {
  throw payload;
}

module.exports = { handleRead, handleUppercase, handleWrite, handleAlter, handleError };
