// 1.1
function square(num) {
    return num ** 2;
}
console.log(square(2));
console.log(square(15));
console.log(square(53));

// 1.2
function stepArray(step, maxNum) {
    const array1 = [];
    for (let i = 0; i <= maxNum; i += step) {
        array1.push(i);
    }
    console.log(array1);
    return array1;
}
stepArray(5, 50);
stepArray(4, 32);

// 1.3
const newArr = stepArray(4, 32);
const squareArr = newArr.map(square);
console.log(squareArr);
// 1.4
function sumArray3() {
    const arr = squareArr;
    const sum = arr.reduce((result, num) => result + num, 0);
    return sum;
}
console.log(sumArray3());
