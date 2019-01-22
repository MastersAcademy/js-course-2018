function arrayOfSumms(arr) {
    const result = [];
    arr.reduce((accumulator, currentValue) => {
        result.push(accumulator + currentValue);
        return accumulator + currentValue;
    }, 0);
    return result;
}

console.log(arrayOfSumms([10, -10, 10, -10, 10]));
console.log(arrayOfSumms([0, 0, 0, 0, 0]));
console.log(arrayOfSumms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
