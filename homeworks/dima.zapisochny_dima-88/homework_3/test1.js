// Task 1.1 The function that squares the value.
const sqr = n => n * n;
const a = 5; const b = 15; const c = 53;
console.log(`1)${a}^2=${sqr(a)}`);
console.log(`2)${b}^2=${sqr(b)}`);
console.log(`3)${c}^2=${sqr(c)}`);

// Task 1.2 A function that creates an array with numbers from 0 to the given values
// and a given step between the values of the elements.
const newArr = (step, max) => {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
};

// 1.2.1 step = 5, max = 50.
console.log(newArr(5, 50));

// 1.2.2 step = 4, max = 32.
console.log(newArr(4, 32));

// Task 1.3 Bring to the square all the values of the array elements.
// The input array is the result of the previous task.
const newArrSqr = (arrArg) => {
    const arrSqr = arrArg.map(item => sqr(item));
    return arrSqr;
};
console.log(newArrSqr(newArr(4, 32)));

// Task 1.4 Find the sum of the array elements from the previous task.
const sumNewArrSqr = (arrArgSqr) => {
    const sumArr = arrArgSqr.reduce((sum, current) => sum + current);
    return sumArr;
};
console.log(sumNewArrSqr(newArrSqr(newArr(4, 32))));
