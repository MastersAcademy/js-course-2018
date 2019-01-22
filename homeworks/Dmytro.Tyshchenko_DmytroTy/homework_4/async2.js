// Task 1.1

function logNumber(number, timeout) {
    setTimeout(() => console.log(number), timeout);
}

function logNumbers(num) {
    let next = num + 10;
    logNumber(next, 1000);
    next *= 3;
    logNumber(next, 2000);
    next -= 20;
    logNumber(next, 3000);
}

/* function logNumber(number, timeout, callback) {
    setTimeout(() => console.log(number), timeout);
    callback(number);
}

function logNumbers(num) {
    // const next = ;
    logNumber(num + 10, 1000, (next) => {
        logNumber(next * 3, 2000, (third) => {
            logNumber(third - 20, 3000, () => {});
        });
    });
} */

logNumbers(8);

// Task 1.2

function logNumberP(number, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => console.log(number), timeout);
        resolve(number);
    });
}

function logNumbersP(number) {
    logNumberP(number + 10, 1000)
        .then(next => logNumberP(next * 3, 2000))
        .then(next => logNumberP(next - 20, 3000));
}

logNumbersP(9);

// Task 1.3

async function logNumbersA(number) {
    let next = await logNumberP(number + 10, 1000);
    next = await logNumberP(next * 3, 2000);
    await logNumberP(next - 20, 3000);
}

logNumbersA(10);
