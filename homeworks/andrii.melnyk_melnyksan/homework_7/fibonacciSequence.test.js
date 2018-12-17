const fromFibonacciSequence = require('./fibonacciSequence');

const randomLimitValue = fromFibonacciSequence.randomValue;
const createFibonacciSequence = fromFibonacciSequence.fibonacciSequence;

test('The random value is greater than or equal to min', () => {
    expect(randomLimitValue(50, 100)).toBeGreaterThanOrEqual(50);
});

test('The random value is less than or equal to max', () => {
    expect(randomLimitValue(50, 100)).toBeLessThanOrEqual(100);
});

test('The first number is 0', () => {
    expect(createFibonacciSequence(randomLimitValue(50, 100))[0]).toBe(0);
});

test('The second number is 1', () => {
    expect(createFibonacciSequence(randomLimitValue(50, 100))[1]).toBe(1);
});

test('Every number is the sum of the two preceding ones', () => {
    const serviceArray = createFibonacciSequence(randomLimitValue(50, 100));
    for (let i = 2; i < serviceArray.length; i++) {
        expect(serviceArray[i]).toBe(serviceArray[i - 1] + serviceArray[i - 2]);
    }
});
