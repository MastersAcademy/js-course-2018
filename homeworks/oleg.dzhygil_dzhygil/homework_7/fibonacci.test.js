const { fibonacci } = require('./fibonacci.task.js');

test('first test', () => {
    expect(fibonacci(0)).toEqual([0]);
});
test('second test', () => {
    expect(fibonacci(1)).toEqual([0, 1, 1]);
});
test('third test', () => {
    expect(fibonacci(3)).toEqual([0, 1, 1, 2, 3]);
});
