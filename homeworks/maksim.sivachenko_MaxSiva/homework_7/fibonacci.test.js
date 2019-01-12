const fibonacci = require('./fibonacci.js');

describe('Test of Fibonacci value', () => {
    test('Function returns an array', () => {
        expect(Array.isArray(fibonacci(100))).toBeTruthy();
    });
    test('First element is 0', () => {
        expect(fibonacci(100)[0]).toBe(0);
    });
    test('Second element is 1', () => {
        expect(fibonacci(100)[1]).toBe(1);
    });
    test('The sum of the two previous', () => {
        const fibArray = fibonacci(Math.floor(Math.random() * 51) + 50);
        for (let i = 2; i < fibArray.length; i++) {
            expect(fibArray[i - 2] + fibArray[i - 1]).toBe(fibArray[i]);
        }
    });
});

describe('Optional additional checks', () => {
    it('the next value is the biggest than previous', () => {
        const fibArray = fibonacci(Math.floor(Math.random() * 51) + 50);
        fibArray.forEach((value, i) => {
            const nextValue = ((i !== (fibArray.length - 1)) ? fibArray[i + 1] : fibArray[i]);
            expect(value <= nextValue).toBeTruthy();
        });
    });

    test('random value is greater than the last value of the array', () => {
        const randomValue = Math.floor(Math.random() * 51) + 50;
        const fibArray = fibonacci(randomValue);
        expect(fibArray[fibArray.length - 1] <= randomValue).toBeTruthy();
    });
});
