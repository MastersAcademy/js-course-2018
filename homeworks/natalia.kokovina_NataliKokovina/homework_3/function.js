/* eslint-disable no-shadow */

// 1.1 Exponentiation

function exponentiation(testNumber) {
    console.log(testNumber * testNumber);
}
exponentiation(5);
exponentiation(15);
exponentiation(53);

// 1.2 Make an array

function array(max, step) {
    const arr = [];
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }
    console.log(arr);
    return (arr);
}
array(50, 5);
array(32, 4);

//  1.3 Exponentiation elements of arr

function expon(numSet) {
    const arrExp = [];
    for (let i = 0; i < numSet.length; i++) {
        arrExp.push(numSet[i] * numSet[i]);
    }
    console.log(arrExp);
    return (arrExp);
}
expon(array(32, 4));

// 1.4 Sum elements

function sum(arrForSumm) {
    let sumArr = 0;
    for (let i = 0; i < arrForSumm.length; i++) {
        sumArr += arrForSumm[i];
    }
    console.log(sumArr);
    return (sumArr);
}
sum(expon(array(32, 4)));
