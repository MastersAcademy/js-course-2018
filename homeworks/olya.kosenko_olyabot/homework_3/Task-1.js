//  1.1 square of argument
function squareToTwo(x) {
    const res = x ** 2;
    console.log(res);
}
squareToTwo(5);
squareToTwo(15);
squareToTwo(53);

//  1.2 Array from 0 to 50 step 5 and Array from 0 to 32 step 4
const aarr = function arrStep(n, step) {
    const arr = [];
    for (let i = 0; i <= n; i += step) {
        arr.push(i);
    }
    return arr;
};
console.log(aarr(50, 5));
console.log(aarr(32, 4));

//  1.3 Square elements of array from 0 to 32 step 4
const arrSqr = aarr(32, 4).map(element => element ** 2);
console.log(arrSqr);

//  1.4 Sum of array elements
const arrSum = arrSqr.reduce((sum, current) => sum + current);
console.log(arrSum);
