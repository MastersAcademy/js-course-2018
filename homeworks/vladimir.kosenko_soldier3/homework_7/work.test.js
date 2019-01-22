const myTest = require('./work');

const { fibonacciArr } = myTest;

describe('check fibonacci array', () => {
    test(' First fibonacci is equal 0', () => {
        expect(fibonacciArr[0]).toBe(0);
    });

    test(' Second fibonacci is equal 1', () => {
        expect(fibonacciArr[1]).toBe(1);
    });

    test('Sum test', () => {
        for (let i = 2; i < fibonacciArr.length; i++) {
            expect(fibonacciArr[i]).toBe(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
        }
    });
});
