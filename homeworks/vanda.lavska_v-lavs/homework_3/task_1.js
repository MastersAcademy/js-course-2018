/*
* task 1.1
 */

function myPow(num, degree) {
    let result = num;
    if (degree >= 1) {
        for (let i = 1; i < degree; i++) {
            result *= num;
        }
        return result;
    }
    return 1;
}

console.log(myPow(53, 2));

/*
* task 1.2
 */
function createArray(min, max, step) {
    const myArray = [];
    for (let i = min; i <= max; i += step) {
        myArray.push(i);
    }
    console.log(myArray);
    return myArray;
}

createArray(0, 50, 5);
const array = createArray(0, 32, 4);

/*
* task 1.3
 */
function getArr(arr, exp) {
    function pow(num, degree) {
        let result = num;
        if (degree >= 1) {
            for (let i = 1; i < degree; i++) {
                result *= num;
            }
            return result;
        }
        return 1;
    }

    const powArr = arr.map(item => pow(item, exp));
    console.log(powArr);
    return powArr;
}
const array2 = getArr(array, 2);

/*
* task 1.4
 */
function getSumArray(arr) {
    const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sumArr);
    return sumArr;
}
getSumArray(array2);
