function sumNumbCreate() {
    let sum = 0;
    return (x) => {
        sum += x;
        return sum;
    };
}

function sumNumber(someArray) {
    const sumNumb = sumNumbCreate();
    const sumArray = someArray.map(sumNumb);
    return sumArray;
}

console.log(sumNumber([10, -10, 10, -10, 10]));
console.log(sumNumber([0, 0, 0, 0, 0]));
console.log(sumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
