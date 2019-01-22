function pow(value) {
    return value * value;
}
function square() {
    const massA = [];
    for (let numberElements = 0; numberElements <= 32; numberElements += 4) {
        massA.push(numberElements);
    }
    return massA;
}
const massA = square(32, 4);
const massB = massA.map(value => pow(value));
console.log(massB.reduce((numberA, numberB) => numberA + numberB));
