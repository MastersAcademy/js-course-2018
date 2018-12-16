// Task 1: Promises
function logNumberPromise(logNumber, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(logNumber);
            reject(new Error('error'));
        }, timeout);
    });
}

function logNumbersResultPlusTen(logNumber) {
    return logNumber + 10;
}

function logNumbersRusultMultiplyThree(logNumber) {
    return logNumbersResultPlusTen(logNumber) * 3;
}

function logNumbersRusultMinusTwenty(logNumber) {
    return logNumbersRusultMultiplyThree(logNumber) - 20;
}

async function logNumbers(logNumber, timeout) {
    let resultNumber = logNumber;
    resultNumber = await logNumberPromise(logNumbersResultPlusTen(logNumber), timeout);
    console.log('Result: ', resultNumber);
    resultNumber = await logNumberPromise(logNumbersRusultMultiplyThree(logNumber), timeout * 2);
    console.log('Result: ', resultNumber);
    resultNumber = await logNumberPromise(logNumbersRusultMinusTwenty(logNumber), timeout * 3);
    console.log('Result: ', resultNumber);
}

logNumbers(10, 1000);
