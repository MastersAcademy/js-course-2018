function findDegreeOfTwo(num) {
    return num * num;
}

function createArray(num, step) {
    const arr = [];
    let number = 0;
    while (number <= num) {
        arr.push(number);
        number += step;
    }
    return arr;
}

// find sum of all elements of array example 1

function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

// find sum of all elements of array example 2

function getSum(total, currentValue) {
    return total + currentValue;
}

console.log('5^2: ', findDegreeOfTwo(5));
console.log('15^2: ', findDegreeOfTwo(15));
console.log('53^2: ', findDegreeOfTwo(53));

console.log('createArray(50,5): ', createArray(50, 5));
console.log('createArray(32,4): ', createArray(32, 4));


const array = createArray(32, 4);
console.log('Input array: ', array);
const newArray = array.map(findDegreeOfTwo);
console.log('all the values of the array elements bring to the square: ', newArray);
console.log('Sum of all the values of the array elements example1: ', sum(newArray));

const sumOfElArr = newArray.reduce(getSum);
console.log('Sum of all the values of the array elements example2: ', sumOfElArr);
