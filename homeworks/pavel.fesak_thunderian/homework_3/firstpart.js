// task 1.1
function squareNumber(number) {
    return number * number;
}
console.log(squareNumber(5));
console.log(squareNumber(15));
console.log(squareNumber(53));

// task 1.2
function twoSteps(number, step) {
    const steps = [];
    for (let i = 0; i <= number; i += step) {
        steps.push(i);
    }
    return steps;
}
console.log(twoSteps(50, 5));
console.log(twoSteps(32, 4));

// task 1.3
function squareArrayNumbers(steps) {
    return steps.map(element => element * element);
}
console.log(squareArrayNumbers(twoSteps(32, 4)));

// task 1.4
function previousSum(steps) {
    return steps.reduce((prev, next) => prev + next);
}
console.log(previousSum(squareArrayNumbers(twoSteps(32, 4))));
