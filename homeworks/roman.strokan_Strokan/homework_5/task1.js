function sumNumbers(someArray) {
    const sumArray = [];
    someArray.reduce((a, b) => {
        sumArray.push(a + b);
        return a + b;
    }, 0);
    return sumArray;
}
console.log(sumNumbers([10, -10, 10, -10, 10]));
console.log(sumNumbers([0, 0, 0, 0, 0]));
console.log(sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
