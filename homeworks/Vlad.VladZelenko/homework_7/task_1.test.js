const { fibonaci } = require('./task_1');

test('rand number fibonacci in range', () => {
    expect(fibonaci(7)).toEqual(expect.arrayContaining([]));
});

test('rand number fibonacci in range test 2', () => {
    expect(fibonaci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});
