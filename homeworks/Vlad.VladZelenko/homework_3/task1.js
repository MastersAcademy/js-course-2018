// 1.1
function square(num) {
    return num * num;
}

console.log(square(5));
console.log(square(15));
console.log(square(53));

// 1.2
function createArr(num, step) {
    const arr = [];
    for (let a = 0; a <= num; a += step) {
        arr.push(a);
    }
    return arr;
}

console.log(createArr(50, 5));
const arr = createArr(32, 4);
console.log(arr);

// 1.3
function squareArr(array) {
    return array.map(square);
}

const result = squareArr(arr);
console.log(result);

// 1.4
function arraySum(array) {
    return array.reduce((a, b) => a + b, 0);
}

console.log(arraySum(result));
