const add = require('./add');

describe('add()', () => {
    it('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});
