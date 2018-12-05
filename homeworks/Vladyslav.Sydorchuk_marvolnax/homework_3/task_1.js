// task 1.1
function square(x) {
    return x * x;
}

console.log(square(5));
console.log(square(15));
console.log(square(53));

// task 1.2
function newArray(max, step) {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}

console.log(newArray(50, 5));
console.log(newArray(32, 4));

// task 1.3
function arraySquare(arr) {
    return arr.map(x => x * x);
}
console.log(arraySquare(newArray(32, 4)));

// task 1.4
function arraySum(arr) {
    return arr.reduce((sum, curent) => sum + curent);
}

console.log(arraySum(arraySquare(newArray(32, 4))));
