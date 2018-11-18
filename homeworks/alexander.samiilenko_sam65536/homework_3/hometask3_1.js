/**
 * @return {number}
 */
function Sqr (number) {
    return number * number;
}

function InitArr (step, max) {
    let result = [];
    let k = 0;
    for (let i = 0; i <= max; i += step) {
        result[k++] = i;
    }
    return result;
}

function SqrArr (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Sqr(arr[i]);
    }
    return arr;
}

/**
 * @return {number}
 */
function SumArr (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

/*
console.log(Sqr(5));
console.log(Sqr(15));
console.log(Sqr(53));

console.log((InitArr(5,50)));
console.log((InitArr(4,32)));

console.log(SqrArr([ 0, 4, 8, 12, 16, 20, 24, 28, 32 ]));

console.log(SumArr([0, 16, 64, 144, 256, 400, 576, 784, 1024 ]));

*/
