const errorNegative = 'number should be positive';
const errorNotNumber = 'is not number';

const getRangeNumber = () => {
    let index = 0;
    let l = 0;
    while (l !== 55 && l !== 89) {
        l = Math.floor(Math.random() * 51 + 50);
        if (l === 55) {
            index = 11;
        }
        if (l === 89) {
            index = 12;
        }
    }
    return index;
};

const fibonacci = (n) => {
    if (typeof n !== 'number') throw new Error(errorNotNumber);
    if (n < 0) throw new Error(errorNegative);

    const fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
        const res = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(res);
    }
    return fibArr;
};

console.log(fibonacci(getRangeNumber()));

module.exports = {
    fibonacci, getRangeNumber, errorNegative, errorNotNumber,
};
