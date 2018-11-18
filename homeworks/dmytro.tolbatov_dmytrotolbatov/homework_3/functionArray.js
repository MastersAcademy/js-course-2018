function squareNumber(number) {
    return number * number;
}

function maxByStep(max, step) {
    const result = [];
    let i = 0;

    while (i <= max) {
        result.push(i);
        i += step;
    }

    return result;
}

function squareArray(arr) {
    return arr.map(number => number * number);
}

function sumArray(arr) {
    let result = 0;
    arr.forEach((number) => {
        result += number;
    });

    return result;
}

console.log(squareNumber(4));
console.log(maxByStep(32, 4));
console.log(squareArray(maxByStep(32, 4)));
console.log(sumArray(squareArray(maxByStep(32, 4))));
