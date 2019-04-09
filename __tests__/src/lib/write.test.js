'use strict';

const write = require('../../../src/lib/write.js');

const events = require('../../../src/events/events.js');
const emit = jest.spyOn(events, 'emit');

jest.mock('fs');

describe('`write` function', () => {
  const text = 'Yabba dabba doo!';
  const file = 'file.txt';
  it('should cause an event to be emitted', () => {
    write(file, text);
    expect(emit).toHaveBeenCalled();
  });

  it('resolves when given a good file', () => {
    return expect(write(file, text)).resolves.toEqual(new Buffer.from('File Contents'));
  });

  it('rejects when given a bad file', () => {
    const badFile = 'bad.txt';
    return expect(write(badFile, text)).rejects.toEqual('Invalid File');
  });
  it('rejects when given bad data', () => {
    const badData = 'bad';
    return expect(write(file, badData)).rejects.toBe('Invalid Data');
  });
});
