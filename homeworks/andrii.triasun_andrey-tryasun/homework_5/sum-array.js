// converting a numeric array to an array of sums

const sumArray = (array) => {
    let sum = 0;
    return () => array.map((item) => {
        sum += item;
        return sum;
    });
};

const res1 = sumArray([10, -10, 10, -10, 10]);
const res2 = sumArray([0, 0, 0, 0, 0]);
const res3 = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const res4 = sumArray([5, 10, 15, 20]);
const res5 = sumArray([]);

console.log(res1()); // [ 10, 0, 10, 0, 10 ]
console.log(res2()); // [ 0, 0, 0, 0, 0 ]
console.log(res3()); // [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
console.log(res4()); // [ 5, 15, 30, 50 ]
console.log(res5()); // [ ]
