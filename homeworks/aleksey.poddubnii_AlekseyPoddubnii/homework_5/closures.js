
// Declerate examples

const exampleOne = [10, -10, 10, -10, 10];
const exampleTwo = [0, 0, 0, 0, 0];
const exampleThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function showNumbers(inputArray) {
    let newArray = 0;
    return inputArray.map((num) => {
        newArray += num;
        return newArray;
    });
}

console.log(showNumbers(exampleOne));
console.log(showNumbers(exampleTwo));
console.log(showNumbers(exampleThree));

// Reduce

function getSum(arr) {
    const result = [];

    const totalSum = arr.reduce((sum, item) => {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);
    return result;
}

console.log(getSum(exampleOne));
console.log(getSum(exampleTwo));
console.log(getSum(exampleThree));
