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

function logNumbers(logNumber, timeout) {
    logNumberPromise(logNumbersResultPlusTen(logNumber), timeout)
        .then(
            (result) => {
                console.log('Result: ', result);
            },
            (error) => {
                console.log('Rejected: ', error);
            },
        );
    logNumberPromise(logNumbersRusultMultiplyThree(logNumber), timeout * 2)
        .then(
            (result) => {
                console.log('Result: ', result);
            },
            (error) => {
                console.log('Rejected: ', error);
            },
        );
    logNumberPromise(logNumbersRusultMinusTwenty(logNumber), timeout * 3)
        .then(
            (result) => {
                console.log('Result: ', result);
            },
            (error) => {
                console.log('Rejected: ', error);
            },
        );
}

logNumbers(10, 1000);
