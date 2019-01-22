// task 1.1

const squareNumber = (num) => {
    const result = num * num;
    return result;
};

console.log(squareNumber(5));
console.log(squareNumber(15));
console.log(squareNumber(53));

// task 1.2

const numberStep = (maxNum, step) => {
    const arr = [];
    for (let i = 0; i <= maxNum; i += step) {
        arr.push(i);
    }
    return arr;
};

console.log(numberStep(50, 5));
console.log(numberStep(32, 4));

// task 1.3

const sqArr = (inpArr) => {
    const outpArr = inpArr.map(elem => squareNumber(elem));
    return outpArr;
};

console.log(sqArr(numberStep(32, 4)));

// task 1.4

const sumArrNum = (sumArr) => {
    const resultSum = sumArr.reduce((sum, elem) => sum + elem, 0);
    return resultSum;
};

console.log(sumArrNum(sqArr(numberStep(32, 4))));
