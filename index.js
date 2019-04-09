'use strict';

const alterFile = require('./src/app.js');

const file = process.argv.slice(2).shift();
alterFile(file);
