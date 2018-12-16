const fibonacciSequence = require('./fibonacciSequence');

test('The first number is 0', () => {
    expect(fibonacciSequence()[0]).toBe(0);
});

test('The second number is 1', () => {
    expect(fibonacciSequence()[1]).toBe(1);
});

test('Every number is the sum of the two preceding ones', () => {
    const serviceArray = fibonacciSequence();
    for (let i = 2; i < serviceArray.length; i++) {
        expect(serviceArray[i]).toBe(serviceArray[i - 1] + serviceArray[i - 2]);
    }
});
