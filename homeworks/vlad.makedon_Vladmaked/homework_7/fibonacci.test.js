const getFibonacciNumbers = require('./fibonacci');

describe('getFibonacciNumbers', () => {
    test('the first element arrayOfFibonacciNumbers equal zero', () => {
        expect(getFibonacciNumbers()[0]).toBe(0);
    });

    test('the second element arrayOfFibonacciNumbers equal one', () => {
        expect(getFibonacciNumbers()[1]).toBe(1);
    });

    function getRandomNumber(startOfRange, endOfRange) {
        return (Math.random() * (endOfRange - startOfRange) + startOfRange);
    }
    const rand = getRandomNumber(50, 100);

    test('the following elements of arrayOfFibonacciNumbers are equal to the sum of the two previous elements', () => {
        for (let i = 2; i < getFibonacciNumbers(rand).length; i++) {
            expect(getFibonacciNumbers(rand)[i]).toBe(
                getFibonacciNumbers(rand)[i - 1] + getFibonacciNumbers(rand)[i - 2],
            );
        }
    });
});
