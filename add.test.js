const add = require('./add');

describe('add()', () => {
    it('one plus one equals two', () => {
        expect(add("i", "i")).toBe("ii");
    });
    it('five plus three equals eight', () => {
        expect(add("v", "iii")).toBe("viii");
    });
    it('thousand plus fivehundred equals 1500', () => {
        expect(add("d", "m")).toBe("md");
    });
});
