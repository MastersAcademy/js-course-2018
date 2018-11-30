
// Declerate examples

const exampleOne = [10, -10, 10, -10, 10];
const exampleTwo = [0, 0, 0, 0, 0];
const exampleThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function plusNumbers(number) {
    let summ = number;
    return (integer) => {
        summ += integer;
        return summ;
    };
}

function showNumbers(inputArray) {
    const callPlus = plusNumbers(0);
    console.log(inputArray.map(callPlus));
}

showNumbers(exampleOne);
showNumbers(exampleTwo);
showNumbers(exampleThree);

// Reduce

function getSum(arr) {
    const result = [];

    const totalSum = arr.reduce((sum, item) => {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);
    console.log(result);
}

getSum(exampleOne);
getSum(exampleTwo);
getSum(exampleThree);
