// Task for Callback
function addNumber(number) {
    return number + 10;
}
function multiplyNumber(number) {
    return addNumber(number) * 3;
}
function minusNumber(number) {
    return multiplyNumber(number) - 20;
}
function callBack(number, funcResult, time, callback) {
    const result = funcResult(number);
    setTimeout(() => {
        console.log(result);
        callback(result);
    }, time);
}
function logNumberCallBack(number) {
    callBack(number, addNumber, 1000, (value1) => {
        callBack(value1, multiplyNumber, 2000, (value2) => {
            callBack(value2, minusNumber, 3000, () => {});
        });
    });
}
logNumberCallBack(50);
// Task for Promise
function promiseMaker(number, funcResult, time) {
    const result = funcResult(number);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(result);
            resolve(result);
        }, time);
    });
}
function logNumberPromise(number) {
    promiseMaker(number, addNumber, 1000)
        .then(num1 => promiseMaker(num1, multiplyNumber, 2000)
            .then(num2 => promiseMaker(num2, minusNumber, 3000)));
}
logNumberPromise(50);
// Task for async
async function asyncNumbers(number) {
    const resultFirst = await promiseMaker(number, addNumber, 1000);
    const resultSecond = await promiseMaker(resultFirst, multiplyNumber, 2000);
    await promiseMaker(resultSecond, minusNumber, 3000);
}
asyncNumbers(50);
