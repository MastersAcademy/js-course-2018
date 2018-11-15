const array = [];

function power(n) {
    return n * n;
}

function fillArray(maxValue, step) {
    for (let i = 0; i <= maxValue; i += step) {
        array.push(i);
    }
    return array.join(', ');
}

function elementToPower() {
    const powerArray = array.map(num => num * num);
    return powerArray.join(', ');
}

function sumOfElements() {
    return array.reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(`To power: ${power(53)}`);
console.log(`Array from 0 to 32 with step 4: ${fillArray(32, 4)}`);
console.log(`Power each element in array: ${elementToPower()}`);
console.log(`Sum of elements in array: ${sumOfElements()}`);
