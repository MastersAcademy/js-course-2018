
function firstOperation(number) {
    return number + 10;
}

function secondOperation(number) {
    return number * 3;
}

function thirdOperation(number) {
    return number - 20;
}

function promiseCall(number, mathFunction) {
    const output = mathFunction(number);
    return new Promise((answer) => {
        setTimeout(() => {
            console.log(output);
            answer(output);
        }, 1000);
    });
}
function logNumbersPromise(number) {
    promiseCall(number, firstOperation)
        .then(firstSum => promiseCall(firstSum, secondOperation))
        .then(secondSum => promiseCall(secondSum, thirdOperation));
}
console.log('Promise');
logNumbersPromise(3);
