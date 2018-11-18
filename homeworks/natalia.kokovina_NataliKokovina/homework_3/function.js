/* eslint-disable no-shadow */

// 1.1 Exponentiation

function Exponentiation(testNumber) {
    console.log(testNumber ** 2);
}
Exponentiation(5);
Exponentiation(15);
Exponentiation(53);

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

function Expon(numSet) {
    const arrExp = [];
    for (let i = 0; i < numSet.length; i++) {
        arrExp.push(numSet[i] ** 2);
    }
    console.log(arrExp);
    return (arrExp);
}
Expon(array(32, 4));

// 1.4 Sum elements

function Sum(arrForSumm) {
    let sumArr = 0;
    for (let i = 0; i < arrForSumm.length; i++) {
        sumArr += arrForSumm[i];
    }
    console.log(sumArr);
    return (sumArr);
}
Sum(Expon(array(32, 4)));
