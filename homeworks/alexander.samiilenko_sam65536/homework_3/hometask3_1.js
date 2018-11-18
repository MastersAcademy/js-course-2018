/**
 * @return {number}
 */
function sqrNum (number) {
    return number * number;
}

function initArr (step, max) {
    let result = [];
    for (let i = 0; i <= max; i += step) {
        result.push(i);
    }
    return result;
}

function sqrArr (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = sqrNum(arr[i]);
    }
    return arr;
}

/**
 * @return {number}
 */
function sumArr (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}


console.log(sqrNum(5));
console.log(sqrNum(15));
console.log(sqrNum(53));

console.log((initArr(5,50)));
console.log((initArr(4,32)));

console.log(sqrArr([ 0, 4, 8, 12, 16, 20, 24, 28, 32 ]));

console.log(sumArr([0, 16, 64, 144, 256, 400, 576, 784, 1024 ]));
