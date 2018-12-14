const fibo = require('./fibo.js');

const perfection99 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
test('is Equal to perfection99 array', () => {
    expect(fibo(99)).toEqual(perfection99);
});


const perfection60 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
test('is Equal to perfection60 array', () => {
    expect(fibo(60)).toEqual(perfection60);
});


const perfection51 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
test('is Equal to perfection51 array', () => {
    expect(fibo(51)).toEqual(perfection51);
});
