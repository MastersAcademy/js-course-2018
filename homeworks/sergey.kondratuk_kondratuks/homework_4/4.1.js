function logNumbersPlus(num) {
    return num + 10;
}
function logNumbersMultiplication(num) {
    return num * 3;
}
function logNumbersMinus(num) {
    return num - 20;
}
// Callback
function logNum(num) {
    setTimeout((num1) => {
        setTimeout((num2) => {
            setTimeout((num3) => {
                console.log(logNumbersMinus(num3));
            }, 3000, logNumbersMultiplication(num2));
            console.log(logNumbersMultiplication(num2));
        }, 2000, logNumbersPlus(num1));
        console.log(logNumbersPlus(num1));
    }, 1000, num);
}
logNum(10);
// Promise
function logPromise(num, doFunction, time) {
    return new Promise((resolve) => {
        const promise = doFunction(num);
        setTimeout(
            () => {
                console.log(promise);
                resolve(promise);
            }, time,
        );
    });
}
function logNumPromise(num) {
    logPromise(num, logNumbersPlus, 1000)
        .then(result => logPromise(result, logNumbersMultiplication, 2000))
        .then(result => logPromise(result, logNumbersMinus, 3000));
}
logNumPromise(5);
// async/await
async function logNumAsync(num) {
    const plus = await logPromise(num, logNumbersPlus, 1000);
    const multiplication = await logPromise(plus, logNumbersMultiplication, 2000);
    logPromise(multiplication, logNumbersMinus, 3000);
}
logNumAsync(7);
