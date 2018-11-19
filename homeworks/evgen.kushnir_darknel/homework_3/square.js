// Task 1.1
function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(15));
console.log(square(53));

// Task 1.2 (1)
function myArray() {
    const newArr = [];
    let i = 0;
    for (; i <= 50; i += 5) {
        newArr.push(i);
    }
    console.log(newArr);
}
myArray();
// Task 1.2 (2)
function mySecondArray() {
    const newArr = [];
    for (let i = 0; i <= 32; i += 4) {
        newArr.push(i);
    }
    console.log(newArr);
}
mySecondArray();
// Task 1.3
const myThirdArray = [0, 4, 8, 12, 16, 20, 24, 28, 32];
const arrSquare = myThirdArray.map(square);
console.log(arrSquare);

// Task 1.4
const myFourthArray = [0, 16, 64, 144, 256, 400, 576, 784, 1024];
const sum = myFourthArray.reduce((a, b) => a + b, 0);
console.log(sum);
