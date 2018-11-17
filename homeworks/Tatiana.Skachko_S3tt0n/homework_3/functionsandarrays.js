// 1
function Square(a) {
    return a * a;
}
console.log(Square(5));
console.log(Square(15));
console.log(Square(53));

// 2
function newArray(x, y) {
    const arr = [];
    for (let i = 0; i <= x; i += y) {
        arr.push(i);
    }
    return arr;
}
console.log(newArray(50, 5));
console.log(newArray(32, 4));

// 3
const arrToSquare = newArray(32, 4).map(Square);
console.log(arrToSquare);

// 4
console.log(
    arrToSquare.reduce((s, n) => s + n, 0),
);
