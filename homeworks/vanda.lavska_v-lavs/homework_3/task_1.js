/*
* task 1.1
 */

function myPow(num) {
    return num * num;
}
console.log(myPow(5));
console.log(myPow(15));
console.log(myPow(53));

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
function getArr(arr) {
    const powArr = arr.map(item => myPow(item));
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
