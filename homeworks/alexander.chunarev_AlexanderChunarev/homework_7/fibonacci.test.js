const fibonacci = require('./fibonacci.js');

describe('Fibonacci test', () => {
    test('First value', () => {
        expect(fibonacci()[0]).toBe(0);
    });


    test('Second value', () => {
        expect(fibonacci()[1]).toBe(1);
    });

    test('Is in sequence', () => {
        const fiboSequence = fibonacci();
        for (let i = 2; i < fiboSequence.length; i++) {
            expect(fiboSequence[i - 1] + fiboSequence[i - 2]).toBe(fiboSequence[i]);
        }
    });
});
