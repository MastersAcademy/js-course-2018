const { getFibonacciNumbers, getRandomNumber } = require('./fibonacci');

describe('getFibonacciNumbers', () => {
    test('the first element fiboArr equal zero', () => {
        expect(getFibonacciNumbers()[0]).toBe(0);
    });

    test('the second element fiboArr equal one', () => {
        expect(getFibonacciNumbers()[1]).toBe(1);
    });

    const rand = getRandomNumber(50, 100);

    test('the following elements of fiboArr are equal to the sum of the two previous elements', () => {
        for (let i = 2; i < getFibonacciNumbers(rand).length; i++) {
            expect(getFibonacciNumbers(rand)[i]).toBe(
                getFibonacciNumbers(rand)[i - 1] + getFibonacciNumbers(rand)[i - 2],
            );
        }
    });
});
