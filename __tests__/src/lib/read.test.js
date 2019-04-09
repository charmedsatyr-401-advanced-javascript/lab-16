'use strict';

const read = require('../../../src/lib/read.js');

jest.mock('fs');

const events = require('../../../src/events/events.js');
const emit = jest.spyOn(events, 'emit');

describe('`read` function', () => {
  it('should cause an event to be emitted', () => {
    const file = 'file.txt';
    read(file);
    expect(emit).toHaveBeenCalled();
  });
  it('resolves when given a good file', () => {
    const file = 'file.txt';
    const result = read(file);
    return expect(result).resolves.toEqual(new Buffer.from('File Contents'));
  });
  it('throws an error when given a bad file', () => {
    const file = 'bad.txt';
    const result = read(file);
    return expect(result).rejects.toEqual('Invalid File');
  });
});
