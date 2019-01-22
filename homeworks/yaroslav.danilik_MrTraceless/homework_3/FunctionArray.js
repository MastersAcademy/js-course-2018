// 1.1
function funcSquare(a) {
    return (a * a);
}

console.log(funcSquare(4));
console.log(funcSquare(15));
console.log(funcSquare(53));

// 1.2
function funcArray(value, walk) {
    const array = [];
    let i;
    for (i = 0; i <= value; i += walk) {
        array.push(i);
    }
    return array;
}

console.log(funcArray(50, 5));
console.log(funcArray(32, 4));

// 1.3
function arrSquare(arrX) {
    return arrX.map(x => funcSquare(x));
}

console.log(arrSquare(funcArray(32, 4)));

// 1.4
function summArray(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}

console.log(summArray(arrSquare(funcArray(32, 4))));
