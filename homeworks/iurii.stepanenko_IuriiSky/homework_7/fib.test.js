const { fib } = require('./fib');

test('first element expects 0', () => {
    expect(fib()[0]).toBe(0);
});

test('second element expects 1', () => {
    expect(fib()[1]).toBe(1);
});

test('expect minimum length is 3', () => {
    expect(fib()).not.toHaveLength(0);
    expect(fib().length).toBeGreaterThanOrEqual(3);
});

test('element equal sum two previous elements', () => {
    const fibNumbers = fib();
    for (let i = 2; i < fibNumbers.length; i++) {
        expect(fibNumbers[i]).toBe(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }
});
