const fib = require('./homework_7');

describe('fibonacci', () => {
    test('check if returned value is array', () => {
        expect(Array.isArray(fib())).toBe(true);
    });

    test('check Fibonacci sequence until max number of 50', () => {
        const arrayFinonacci = fib(50);
        for (let i = 2; i < arrayFinonacci.lenght; i++) {
            expect(arrayFinonacci[i]).toEqual(arrayFinonacci[i - 1] + arrayFinonacci[i - 2]);
        }
    });

    test('check Fibonacci sequence until max number of 100', () => {
        const arrayFinonacci = fib(50);
        for (let i = 2; i < arrayFinonacci.lenght; i++) {
            expect(arrayFinonacci[i]).toEqual(arrayFinonacci[i - 1] + arrayFinonacci[i - 2]);
        }
    });

    test('check the first number, to be 0', () => {
        expect(fib(0)[0]).toBe(0);
    });
});
