function power(n) {
    return n * n;
}

function fillArray(maxValue, step) {
    const array = [];
    for (let i = 0; i <= maxValue; i += step) {
        array.push(i);
    }
    return array;
}

function elementToPower() {
    return fillArray(32, 4).map(num => power(num));
}

function sumOfElements() {
    return elementToPower().reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(`To power: ${power(53)}`);
console.log(`Array from 0 to 32 with step 4: ${fillArray(32, 4)}`);
console.log(`Power each element in array: ${elementToPower()}`);
console.log(`Sum of elements in array: ${sumOfElements()}`);
