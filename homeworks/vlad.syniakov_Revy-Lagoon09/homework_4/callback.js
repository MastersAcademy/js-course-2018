//  Callback
function stepPlus(number) {
    return number + 10;
}
function stepMultiply(number) {
    return number * 3;
}
function stepMinus(number) {
    return number - 20;
}
function logNumbersCallback(num) {
    setTimeout((value1) => {
        setTimeout((value2) => {
            setTimeout((value3) => {
                console.log(stepMinus(value3));
            }, 3000, stepMultiply(value2));
            console.log(stepMultiply(value2));
        }, 2000, stepPlus(value1));
        console.log(stepPlus(value1));
    }, 1000, num);
}
logNumbersCallback(0);
//  Promise
function promiseCalc(number, operation, delay) {
    return new Promise((resolve, reject) => {
        if (typeof (number) === 'number') {
            setTimeout(() => {
                const value = operation(number);
                console.log(value);
                resolve(value);
            }, delay);
        } else {
            reject();
        }
    });
}
function logNumbersPromise(number) {
    promiseCalc(number, stepPlus, 1000)
        .then(response => promiseCalc(response, stepMultiply, 2000))
        .then(response => promiseCalc(response, stepMinus, 3000))
        .catch(error => console.log(error));
}
logNumbersPromise(0);
//  Async
async function logNumbersAsync(number) {
    let value = await promiseCalc(number, stepPlus, 1000);
    value = await promiseCalc(value, stepMultiply, 2000);
    promiseCalc(value, stepMinus, 3000);
}
logNumbersAsync(0);
