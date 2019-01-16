const fib = require('./task_1');

const randomNum = ((min, max) => {
    const minRange = min;
    const maxRange = max;
    return Math.round(minRange + Math.random() * (maxRange + 1 - minRange), 10);
});


const retult = fib(randomNum(50, 100));
console.log(`Array: ${retult} \nArray length: ${retult.length}`);

describe('fibonacciSeries', () => {
    test('Check is the result is an array', () => {
        expect(Array.isArray(retult)).toBeTruthy();
    });

    test('Checking if first element in array is zero', () => {
        expect(retult[0]).toEqual(0);
    });

    if (retult.length === 10) {
        test('Check is the last element in the array equals 34', () => {
            expect(retult[9]).toEqual(34);
        });
    }
    if (retult.length === 11) {
        test('Check is the last element in the array equals 55', () => {
            expect(retult[10]).toEqual(55);
        });
    }
    if (retult.length === 12) {
        test('Check is the last element in the array equals 89', () => {
            expect(retult[11]).toEqual(89);
        });
    }
});
