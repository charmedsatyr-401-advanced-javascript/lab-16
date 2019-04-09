'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefined, new Buffer.from('File Contents'));
  }
};

exports.writeFile = (file, data, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else if (data.match(/bad/i)) {
    cb('Invalid Data');
  } else {
    cb(undefined, new Buffer.from('File Contents'));
  }
};
