//task1.1

function pow(number) {
    return number * number;
}
console.log(pow(5));
console.log(pow(15));
console.log(pow(53));

//task1.2

function createArrayWithStep(maxNumber, step) {
    const numbers = [];
    for (let i = 0; i <= maxNumber; i += step) {
        numbers.push(i);
    }
    return numbers;
}
console.log('\nArray test');
console.log(`From 0 to 50. Step 5: {createArrayWithStep(50, 5)}`);
console.log(`From 0 to 32. Step 4: {createArrayWithStep(32, 4)}`);

//task2.1

const someArray = [0, 4, 8, 12, 16, 20, 24, 28, 32];
function square(array) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        results.push(array[i] ** 2);
    }
    return results;
}
console.log(square(someArray));

//task2.2

const SomeArrayWithStep = [0, 16, 64, 144, 256, 400, 576, 784, 1024];
function arraySum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
console.log(arraySum(SomeArrayWithStep));
