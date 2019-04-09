'use strict';

const alterFile = require('../../src/app.js');

// mocking the fs module is from class 3
// mocking promises at 12pm that day
const events = require('../../src/events/events.js');
const emit = jest.spyOn(events, 'emit');

jest.mock('fs');

const file = 'file.txt';
beforeAll(() => {
  alterFile(file);
});

describe('`alterFile` function', () => {
  it('should call emit an event', () => {
    expect(emit).toHaveBeenCalledWith('alter', file);
  });
  it('should call the `read` function on a `file` argument', () => {
    expect(emit).toHaveBeenCalledWith('read', file);
  });
  it('should call the `uppercase` function', () => {
    expect(emit).toHaveBeenCalledWith('uppercase');
  });
  it('should call the `write` function', () => {
    expect(emit).toHaveBeenCalledWith('write', file);
  });
});
