function logNumbersPlus(number, callback) {
    setTimeout(() => {
        callback(number + 10);
    }, 1000);
}
function logNumbersMultiply(number, callback) {
    setTimeout(() => {
        callback(number * 3);
    }, 2000);
}
function logNumbersMinus(number, callback) {
    setTimeout(() => {
        callback(number - 20);
    }, 3000);
}
function logNumbers() {
    logNumbersPlus(10, (plus) => {
        console.log(plus);
        logNumbersMultiply(plus, (mult) => {
            console.log(mult);
            logNumbersMinus(mult, (minus) => {
                console.log(minus);
            });
        });
    });
}
logNumbers();
function plusPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number + 10), 1000);
    });
}
function multiplyPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number * 3), 2000);
    });
}
function minusPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number - 20), 3000);
    });
}
function promises() {
    plusPromise(10)
        .then((plus) => {
            console.log(plus);
            return multiplyPromise(plus);
        })
        .then((multiply) => {
            console.log(multiply);
            return minusPromise(multiply);
        })
        .then(minus => console.log(minus));
}
promises();
let inNumber = 10;
async function asyncs() {
    inNumber = await plusPromise(inNumber);
    console.log(inNumber);
    inNumber = await multiplyPromise(inNumber);
    console.log(inNumber);
    inNumber = await minusPromise(inNumber);
    console.log(inNumber);
}
asyncs();
