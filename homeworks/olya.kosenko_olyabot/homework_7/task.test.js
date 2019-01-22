const fibonachi = require('./task');

test('First number 0', () => {
    expect(fibonachi()[0]).toBe(0);
});

test('Second number 1 ', () => {
    expect(fibonachi()[1]).toBe(1);
});

test('The last but one number from 50 to 100 is 55', () => {
    const arr = fibonachi(100);
    expect(arr[arr.length - 2]).toBe(55);
});

test('Last number from 50 to 100 is 89', () => {
    const arr = fibonachi(100);
    expect(arr[arr.length - 1]).toBe(89);
});

test('Test all numbers Fibonachi to 100', () => {
    const arr = fibonachi(100);
    for (let i = 2; i < arr; i++) {
        expect(arr[i]).toBe(arr[i - 1] + arr[i - 2]);
    }
});
