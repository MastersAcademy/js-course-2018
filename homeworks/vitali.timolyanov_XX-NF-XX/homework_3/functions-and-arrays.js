// 1.1
function toSquare(number) {
    return number * number;
}

console.log('Squaring test');
console.log(`The square of 05: ${toSquare(5)}`);
console.log(`The square of 15: ${toSquare(15)}`);
console.log(`The square of 53: ${toSquare(53)}`);

// 1.2
function createArrayOfNumbers(maxNumber, step) {
    const numbers = [];
    for (let i = 0; i <= maxNumber; i += step) {
        numbers.push(i);
    }
    return numbers;
}

console.log('\nArray test');
console.log(`From 0 to 50. Step 5: ${createArrayOfNumbers(50, 5)}`);
console.log(`From 0 to 32. Step 4: ${createArrayOfNumbers(32, 4)}`);

// 1.3
const squaredNumbers = createArrayOfNumbers(32, 4).map(toSquare);
console.log(`\nSquared array test: ${squaredNumbers}`);

// 1.4
console.log('\nSumm of all elements of squared array:');
console.log(squaredNumbers.reduce((summ, nextNumber) => summ + nextNumber));
