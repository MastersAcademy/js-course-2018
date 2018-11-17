//  1.1 square of argument
function squareToTwo(x) {
    const res = x ** 2;
    console.log(res);
}
squareToTwo(5);
squareToTwo(15);
squareToTwo(53);

//  1.2.1 Array from 0 to 50 step 5
const arrStep5 = [];
function arrStepFive() {
    for (let i = 0; i <= 50; i += 5) {
        arrStep5.push(i);
    }
    return arrStep5;
}
console.log(arrStepFive());

//  1.2.2 Array from 0 to 32 step 4
const arrStep4 = [];
function arrStepFour() {
    for (let i = 0; i <= 32; i += 4) {
        arrStep4.push(i);
    }
    return arrStep4;
}
console.log(arrStepFour());

//  1.3 Square elements of array from 0 to 32 step 4
const arrStep4Sqrt = [];
function arrSqrt() {
    const len = arrStep4.length;
    for (let i = 0; i < len; i++) {
        arrStep4Sqrt[i] = arrStep4[i] ** 2;
    }
    return arrStep4Sqrt;
}
console.log(arrSqrt());

//  1.4 Sum of array elements
function sumArr() {
    const len = arrStep4Sqrt.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += arrStep4Sqrt[i];
    }
    return sum;
}
console.log(sumArr());
