const { fibonachi } = require('./task.js');

describe('Task test', () => {
    test('Type array', () => {
        expect(Array.isArray(fibonachi())).toBe(true);
    });

    test('First element must be 0', () => {
        expect(fibonachi()[0]).toBe(0);
    });

    test('Five element must be 3', () => {
        expect(fibonachi()[4]).toBe(3);
    });

    test('Ten element must be 34', () => {
        expect(fibonachi()[9]).toBe(34);
    });

    test('Sum of the two previous elements test ', () => {
        const num = fibonachi();
        for (let i = 2; i < num.length; i++) {
            expect(num[i]).toBe(num[i - 1] + num[i - 2]);
        }
    });
});
