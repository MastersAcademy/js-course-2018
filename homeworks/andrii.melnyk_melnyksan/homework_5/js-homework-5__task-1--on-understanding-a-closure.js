// Converting a numeric array to the appropriate array of sums using closures:

//  data for test:                     expected result:
// [10, -10, 10, -10, 10]             [10, 0, 10, 0, 10]
// [0, 0, 0, 0, 0]                    [0, 0, 0, 0, 0]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]

const someArray1 = [10, -10, 10, -10, 10];
const someArray2 = [0, 0, 0, 0, 0];
const someArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray() {
    let accumulator = 0;
    return (currentValue) => {
        accumulator += currentValue;
        return accumulator;
    };
}

function summator(someArray) {
    return someArray.map(sumArray());
}

const arrayOfSums1 = summator(someArray1);
const arrayOfSums2 = summator(someArray2);
const arrayOfSums3 = summator(someArray3);

console.log(arrayOfSums1);
console.log(arrayOfSums2);
console.log(arrayOfSums3);
