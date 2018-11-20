function funcSquare(a) {
    return (a * a);
}

function arrFun(max, step) {
    const array = [];
    for (let i = 0; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

function square(num) {
    return num.map(x => funcSquare(x));
}

function arrSum(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}
console.log(arrSum(square(arrFun(32, 4))));
