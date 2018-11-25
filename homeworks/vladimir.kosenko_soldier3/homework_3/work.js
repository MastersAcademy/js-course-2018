function pow(n) {
    return n ** 2;
}

function createArray(maxValue, step) {
    const array = [];
    for (let i = 0; i <= maxValue; i += step) {
        array.push(i);
    }
    return array;
}

function arrayMathPow(arr) {
    const newArr = [];
    arr.forEach((element) => {
        newArr.push(pow(element));
    });
    return newArr;
}

function arraySum(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum;
}

function recursion(i) {
    if (i === 0 || i === 2) {
        return true;
    }
    if (i % 2 === 0) {
        return recursion(i / 2);
    }
    return false;
}

console.log('~task 1.1~');
console.log(`5 squared equals: ${pow(5)}`);
console.log(`15 squared equals: ${pow(15)}`);
console.log(`53 squared equals: ${pow(53)}`);
console.log('~task 1.2~');
console.log(createArray(50, 5));

const arr = createArray(32, 4);
console.log(arr);

console.log('~task 1.3~');
const arrayNumber = arrayMathPow(arr);
console.log(arrayNumber);

console.log('~task 1.4~');
const sumArray = arraySum(arrayNumber);
console.log(`Summa ${sumArray} `);

console.log('~task 2~');
for (let i = 10; i <= 600; i++) {
    if (recursion(i)) {
        console.log(i);
    }
}
