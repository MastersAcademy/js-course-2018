// 1.1
function square(a, b, c) {
    console.log(a ** 2);
    console.log(b ** 2);
    console.log(c ** 2);
}
square(2, 15, 53);

// 1.2(1)
function firstArray() {
    // eslint-disable-next-line camelcase
    const array_1 = [];
    for (let i = 0; i < 51; i += 5) {
        array_1.push(i);
    }
    console.log(array_1);
}
firstArray();
// 1.2(2)
function secondArray() {
    // eslint-disable-next-line camelcase
    const array_2 = [];
    for (let i = 0; i < 33; i += 4) {
        array_2.push(i);
    }
    console.log(array_2);
}
secondArray();
// 1.3
function squareArray() {
    // eslint-disable-next-line camelcase
    const array_3 = [];
    const array = [0, 4, 8, 12, 16, 20, 24, 28, 32];
    for (let i = 0; i < array.length; i++) {
        (array_3.push(array[i] ** 2));
    }

    // eslint-disable-next-line camelcase
    return array_3;
}
console.log(squareArray());
// 1.4
function sumArray3() {
    const arr = squareArray();
    const sum = arr.reduce((result, num) => result + num, 0);
    return sum;
}
console.log(sumArray3());
