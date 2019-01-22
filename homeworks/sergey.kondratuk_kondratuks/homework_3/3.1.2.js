function arrFun(max, step) {
    const array = [];
    for (let i = 0; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

console.log(arrFun(50, 5));
console.log(arrFun(32, 4));
