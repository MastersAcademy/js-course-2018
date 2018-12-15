const assert = require('assert');

const fibonacci = require('./fibonacci.js');

describe('Test of Fibonacci value', () => {
    it('the next value is the biggest than previous', () => {
        const fibArray = fibonacci(Math.floor(Math.random() * 51) + 50);
        fibArray.forEach((value, i) => {
            if (i !== (fibArray.length - 1)) {
                assert.equal(value <= fibArray[i + 1], true);
            }
        });
    });

    test('random value is greater than the last value of the array', () => {
        const randomValue = Math.floor(Math.random() * 51) + 50;
        const fibArray = fibonacci(randomValue);
        expect(fibArray[fibArray.length - 1] <= randomValue).toBeTruthy();
    });

    test('The sum of the two previous', () => {
        const fibArray = fibonacci(Math.floor(Math.random() * 51) + 50);
        fibArray.forEach((value, i) => {
            if (i > 2) {
                expect(fibArray[i - 2] + fibArray[i - 1]).toBe(value);
            } else {
                expect(fibArray[i]).toBe(value);
            }
        });
    });
});
