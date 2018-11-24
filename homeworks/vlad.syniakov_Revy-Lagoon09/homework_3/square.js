// 1.1
function square(a, b, c) {
    console.log(a ** 2);
    console.log(b ** 2);
    console.log(c ** 2);
}
square(2, 15, 53);

// 1.2
function StepArray(step, maxNum) {
    // eslint-disable-next-line camelcase
    const array_1 = [];
    for (let i = 0; i <= maxNum; i += step) {
        array_1.push(i);
    }
    console.log(array_1);
}
StepArray(5, 50);
StepArray(4, 32);

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
