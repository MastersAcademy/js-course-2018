const { fib, random } = require('./main.js');

describe('Сheck value of fib array', () => {
    test('First value must be 0', () => {
        expect(fib(random)[0]).toBe(0);
    });

    test('Four value must be 2', () => {
        expect(fib(random)[3]).toBe(2);
    });

    test('Ten value must be 34', () => {
        expect(fib(random)[9]).toBe(34);
    });
});

test('Sum test of each ellements', () => {
    for (let i = 2; i < fib.length; i++) {
        expect(fib[i]).toBe(fib[i - 1] + fib[i - 2]);
    }
});
