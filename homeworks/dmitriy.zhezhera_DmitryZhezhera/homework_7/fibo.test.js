const fibo = require('./fibo.js');

test('is Equal to perfection99 array', () => {
    const perfection99 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    expect(fibo(99)).toEqual(perfection99);
});

test('is Equal to perfection60 array', () => {
    const perfection60 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fibo(60)).toEqual(perfection60);
});

test('is Equal to perfection51 array', () => {
    const perfection51 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibo(51)).toEqual(perfection51);
});
