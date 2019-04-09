'use strict';

const uppercase = require('../../../src/lib/uppercase.js');

const events = require('../../../src/events/events.js');

const emit = jest.spyOn(events, 'emit');

describe('`uppercase` function', () => {
  it('should cause an event to be emitted', () => {
    const text = 'test';
    uppercase(text);
    expect(emit).toHaveBeenCalled();
  });

  it('should transform its argument text to uppercase', () => {
    const text = 'test';
    const result = 'TEST';
    expect(uppercase(text)).toBe(result);
  });
});
