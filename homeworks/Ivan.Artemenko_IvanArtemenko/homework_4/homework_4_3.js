
function firstOperation(number) {
    return number + 10;
}

function secondOperation(number) {
    return number * 3;
}

function thirdOperation(number) {
    return number - 20;
}
function asyncAwait(number, mathFunction) {
    const output = mathFunction(number);
    return new Promise((answer) => {
        setTimeout(() => {
            console.log(output);
            answer(output);
        }, 1000);
    });
}
async function logNumbers(number) {
    const firstSum = await asyncAwait(number, firstOperation);
    const secondSum = await asyncAwait(firstSum, secondOperation);
    await asyncAwait(secondSum, thirdOperation);
}
console.log('Async/Await');
logNumbers(3);
