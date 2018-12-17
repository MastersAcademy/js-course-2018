const { fiboNumb } = require('./fibo');

test('test fibonacci', () => {
    const minFibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fiboNumb(50)).toEqual(minFibonacciArray);
});

test('test fibonacci', () => {
    const minFibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fiboNumb(55)).toEqual(minFibonacciArray);
});
