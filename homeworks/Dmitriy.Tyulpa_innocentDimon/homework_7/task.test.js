const { fibonachi } = require('./task.js');

describe('Task test', () => {
    test('Type array', () => {
        expect(Array.isArray(fibonachi())).toBe(true);
    });

    test('First element', () => {
        expect(fibonachi()[0]).toBe(0);
    });

    test('Five element', () => {
        expect(fibonachi()[4]).toBe(3);
    });

    test('Ten element', () => {
        expect(fibonachi()[9]).toBe(34);
    });

    test('Sum test', () => {
        const num = fibonachi();
        for (let i = 2; i < num.length; i++) {
            expect(num[i]).toBe(num[i - 1] + num[i - 2]);
        }
    });
});
