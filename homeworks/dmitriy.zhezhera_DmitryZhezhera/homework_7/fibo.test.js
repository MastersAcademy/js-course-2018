const fibo = require('./fibo.js');

const perfection = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
test('is Equal to perfection array', () => {
    expect(fibo(99)).toEqual(perfection);
});
