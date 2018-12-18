const fib = require('./homework_7');

describe('fibonacci', () => {
    test('check if returned value is array', () => {
        expect(Array.isArray(fib())).toBe(true);
    });

    test('check Fibonacci sequence until max number of 50', () => {
        const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        const arrayFinonacci = fib(50);
        for (let i = 0; i < arrayFinonacci.lenght; i++) {
            expect(arrayFinonacci[i]).toEqual(arrayFinonacci[i] === array[i]);
        }
    });

    test('check Fibonacci sequence until max number of 100', () => {
        const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        const arrayFinonacci = fib(50);
        for (let i = 0; i < arrayFinonacci.lenght; i++) {
            expect(arrayFinonacci[i]).toEqual(arrayFinonacci[i] === array[i]);
        }
    });

    test('check if iterations count is less then max (50)', () => {
        const array = fib(50);
        for (let i = 0; i < array.lenght; i++) {
            expect(array[i]).toBe(array[i] < 50);
        }
    });

    test('check if iterations count is less then max (100)', () => {
        const array = fib(100);
        for (let i = 0; i < array.lenght; i++) {
            expect(array[i]).toBe(array[i] < 100);
        }
    });
});
