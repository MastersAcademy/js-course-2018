const { fib } = require('./task1');

describe('Fibonacci', () => {
    // Сheck start value

    describe('Сheck start values', () => {
        test('Сheck start value: array[0]', () => {
            expect(fib(50)[0]).toBe(0);
        });
        test('Сheck start value: array[1]', () => {
            expect(fib(50)[1]).toBe(1);
        });
    });

    // Validation values for correct calculation

    describe('Check array', () => {
        test('The sum of the two previous', () => {
            const fibArr = fib(Math.floor(Math.random() * 50) + 50);
            for (let i = 2; i < fibArr.length; i++) {
                expect(fibArr[i - 1] + fibArr[i - 2]).toBe(fibArr[i]);
            }
        });
    });
});
