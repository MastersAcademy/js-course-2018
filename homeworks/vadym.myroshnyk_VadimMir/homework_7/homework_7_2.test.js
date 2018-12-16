const fib = require('./homework_7');

describe("fibonacci", function() {
    test("check array", function() {
        expect(Array.isArray(fib().toBe(true)));
    });

    test("check 0", function() {
        expect(fib(0).toBe([0]));
    });

    test("check 50", function() {
        const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        expect(fin(50).toEqual(array));
    });

    test("check 100", function() {
        const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        expect(fin(100).toEqual(array));
    });
});