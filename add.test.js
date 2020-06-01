const add = require('./add');

describe('add()', () => {
    it('one plus one equals two', () => {
        expect(add("i", "i")).toBe("ii");
    });
    it('five plus three equals eight', () => {
        expect(add("v", "iii")).toBe("viii");
    });
});
