const { fibonacciNumbers, randomFrom50to100 } = require('./Fibonacci');

describe('Testing a function that returns an array of Fibonacci numbers that does not exceed the accepted argument.', () => {
    test('fibonacciNumbers(0) return [0]', () => {
        expect(fibonacciNumbers(0)).toEqual([0]);
    });

    test('fibonacciNumbers(1) return [0, 1, 1]', () => {
        expect(fibonacciNumbers(1)).toEqual([0, 1, 1]);
    });

    test('fibonacciNumbers(2) return [0, 1, 1, 2]', () => {
        expect(fibonacciNumbers(2)).toEqual([0, 1, 1, 2]);
    });

    test('fibonacciNumbers(3) return [0, 1, 1, 2, 3]', () => {
        expect(fibonacciNumbers(3)).toEqual([0, 1, 1, 2, 3]);
    });

    test('fibonacciNumbers(4) return [0, 1, 1, 2, 3]', () => {
        expect(fibonacciNumbers(4)).toEqual([0, 1, 1, 2, 3]);
    });

    test('fibonacciNumbers(5) return [0, 1, 1, 2, 3, 5]', () => {
        expect(fibonacciNumbers(5)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    test('fibonacciNumbers(8) return [0, 1, 1, 2, 3, 5, 8]', () => {
        expect(fibonacciNumbers(8)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    });

    test('fibonacciNumbers(50) return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
        expect(fibonacciNumbers(50)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('sending a negative numbers throws an error', () => {
        const error = new Error('The number should be at least 0!');
        expect(() => fibonacciNumbers(-8)).toThrow(error);
    });

    test('sending not a numbers throws an error', () => {
        const error = new Error('Must be given a number (positive)!');
        expect(() => fibonacciNumbers('8')).toThrow(error);
    });
});

describe('Check the range of random numbers', () => {
    beforeAll(() => {
        Math.random = jest.fn();
    });

    test('Checking the minimum value', () => {
        Math.random.mockReturnValueOnce(0);
        expect(randomFrom50to100()).toBeCloseTo(50);
    });

    test('Checking the maximum value', () => {
        Math.random.mockReturnValueOnce(0.9999999999999999);
        expect(randomFrom50to100()).toBeCloseTo(100);
    });
});
