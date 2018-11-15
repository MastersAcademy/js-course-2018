function func(number) {
    return number * number;
}

console.log(`${5}^2=${func(5)}`);
console.log(`${15}^2=${func(15)}`);
console.log(`${53}^2=${func(53)}`);

function block(a, b) {
    const array = [];
    for (let i=0; i<=a; i+=b) {
        array.push (i);
    }
    return array;
}
console.log(block (50, 5));
console.log(block (32, 4));

function arraySq(block) {
    return block.map(element => element * element);
}
console.log(arraySq(block(32, 4)));

function sumArraySq(block) {
    return block.reduce((sum, nextNum) => sum + nextNum)
}
console.log(sumArraySq(arraySq(block(32, 4))));
