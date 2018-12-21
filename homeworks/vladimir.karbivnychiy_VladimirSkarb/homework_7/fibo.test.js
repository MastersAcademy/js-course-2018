const { fiboNumb } = require('./fibo');

test('Function returns an array?', () => {
    expect(Array.isArray(fiboNumb(100))).toEqual(true);
});

test('Is the first element of an array is 0?', () => {
    expect(fiboNumb(100)[0]).toEqual(0);
});

test('Is the second element of an array is 1?', () => {
    expect(fiboNumb(100)[1]).toEqual(1);
});

test('Is each element of an array is the sum of the previous two?', () => {
    const arr = fiboNumb(100);
    for (let i = 2; i < arr.length; i++) {
        expect(arr[i]).toEqual(arr[i - 1] + arr[i - 2]);
    }
});
