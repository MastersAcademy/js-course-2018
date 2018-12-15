
const fibonacci = require('./hv_7');

test('first element of sequence to equal 0', () => {
    expect(fibonacci()[0]).toBe(0);
});

test('2 element of sequence to equal 1', () => {
    expect(fibonacci()[1]).toBe(1);
});

describe('test sequence to be equal fibonacci', () => {
    const fibonacciArr = fibonacci();
    for (let i = 2; i < fibonacciArr.length - 3; i++) {
        it('check elements of sequence', () => {
            const val = fibonacciArr[i - 1] + fibonacciArr[i - 2];
            expect(fibonacciArr[i]).toBe(val);
        });
    }
});

test('last element of sequence to more 50 and less than 100', () => {
    const fibonacciArr = fibonacci();
    expect(fibonacciArr[fibonacciArr.length - 1]).toBeGreaterThanOrEqual(50);
    expect(fibonacciArr[fibonacciArr.length - 1]).toBeLessThanOrEqual(100);
});
