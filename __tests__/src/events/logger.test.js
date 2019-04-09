'use strict';

const {
  handleRead,
  handleUppercase,
  handleWrite,
  handleAlter,
  handleError,
} = require('../../../src/events/logger.js');

const log = jest.spyOn(global.console, 'log');
const error = jest.spyOn(global.console, 'error');

describe('`handleRead` function', () => {
  it('should log to the console', () => {
    const file = 'file.txt';
    handleRead(file);
    expect(log).toHaveBeenCalled();
  });
});
describe('`handleUppercase` function', () => {
  it('should log to the console', () => {
    handleUppercase();
    expect(log).toHaveBeenCalled();
  });
});
describe('`handleWrite` function', () => {
  it('should log to the console', () => {
    const file = 'file.txt';
    const data = 'Yabba dabba doo!';
    handleWrite(file, data);
    expect(log).toHaveBeenCalled();
  });
});
describe('`handleAlter` function', () => {
  it('should log to the console', () => {
    const file = 'file.txt';
    handleAlter(file);
    expect(log).toHaveBeenCalled();
  });
});
describe('`handleError` function', () => {
  it('should log to the console', () => {
    const err = 'Ooops!';
    handleError(err);
    expect(error).toHaveBeenCalled();
  });
});
