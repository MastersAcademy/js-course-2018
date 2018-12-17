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
    const serviceArray = createFibonacciSequence(50, 100);

    for (let i = 2; i < serviceArray.length; i++) {
        expect(serviceArray[i]).toBe(serviceArray[i - 1] + serviceArray[i - 2]);
    }
});

test('The last number of the fibonacci sequence less than 100', () => {
    const serviceArray = createFibonacciSequence(50, 100);

    expect(serviceArray[serviceArray.length - 1]).toBeLessThan(100);
});

test('Even if a limit is less than 55 the last number of the fibonacci sequence is 55', () => {
    const serviceArray = createFibonacciSequence(50, 55);

    expect(serviceArray[serviceArray.length - 1]).toBe(55);
});
