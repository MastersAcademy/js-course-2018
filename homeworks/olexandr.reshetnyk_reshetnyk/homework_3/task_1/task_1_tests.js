const { squareNumber } = require('./task_1.1');
const { numbersWithSomeStep } = require('./task_1.2');
const { squareAllArrayNumbers } = require('./task_1.3');
const { sumArrayElements } = require('./task_1.4');

// tests for task 1.1
console.log();
console.log('***Tests for task 1.1***');
console.log(`5^2 = ${squareNumber(5)}`);
console.log(`15^2 = ${squareNumber(15)}`);
console.log(`53^2 = ${squareNumber(53)}`);
console.log();

// tests for task 1.2
console.log('***Tests for task 1.2***');
console.log(`step:5, limit:50 => ${numbersWithSomeStep(5, 50)}`);
console.log(`step:4, limit:32 => ${numbersWithSomeStep(4, 32)}`);
console.log();

// tests for task 1.3
console.log('***Tests for task 1.3***');
const numbers = numbersWithSomeStep(4, 32);
console.log(`before: ${numbers}`);
const squaredNumbers = squareAllArrayNumbers(numbers);
console.log(`after: ${squaredNumbers}`);
console.log();

// tests for task 1.4
console.log('***Tests for task 1.4***');
console.log(`Sum is: ${sumArrayElements(squaredNumbers)}`);
