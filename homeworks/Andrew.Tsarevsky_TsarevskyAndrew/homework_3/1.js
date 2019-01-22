// task 1.1
function getSq(a) {
    const b = a * a;
    return b;
}
console.log(getSq(5));
// task 1.2
function arrayCreation(a, b) {
    const arr = [];
    for (let i = 0; i <= b; i += a) {
        arr.push(i);
    }
    return arr;
}

console.log(arrayCreation(4, 32));

// task 1.3
function arrayElementsSq(a) {
    const arr2 = [];
    for (let i = 0; i < a.length; i++) {
        arr2.push(getSq(a[i]));
    }
    return arr2;
}
console.log(arrayElementsSq(arrayCreation(4, 32)));

// task 1.4
function arrayElementsSum(a) {
    const sum = a.reduce((x, y) => x + y);
    return sum;
}
console.log(arrayElementsSum(arrayElementsSq(arrayCreation(4, 32))));
