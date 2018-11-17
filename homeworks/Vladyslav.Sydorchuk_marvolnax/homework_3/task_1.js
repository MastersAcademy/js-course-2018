// task 1.1
function Square(x) {
    return x * x;
}

console.log(Square(5));
console.log(Square(15));
console.log(Square(53));

// task 1.2
function NewArray(max, step) {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}

console.log(NewArray(50, 5));
console.log(NewArray(32, 4));

// task 1.3
function ArraySquare(arr) {
    return arr.map(x => x * x);
}
console.log(ArraySquare(NewArray(32, 4)));

// task 1.4
function ArraySum(arr) {
    return arr.reduce((sum, curent) => sum + curent);
}

console.log(ArraySum(ArraySquare(NewArray(32, 4))));
