console.log('Call Backs');
function firstOperation(number) {
    return number + 10;
}

function secondOperation(number) {
    return number * 3;
}

function thirdOperation(number) {
    return number - 20;
}
function сallBack(number, mathFunction, callback) {
    const output = mathFunction(number);
    setTimeout(() => {
        console.log(output);
        callback(output);
    }, 1000);
}
function logNumbersCallBack(number) {
    сallBack(number, firstOperation, (firstSum) => {
        сallBack(firstSum, secondOperation, (secondSum) => {
            сallBack(secondSum, thirdOperation, () => {});
        });
    });
}
logNumbersCallBack(3);
