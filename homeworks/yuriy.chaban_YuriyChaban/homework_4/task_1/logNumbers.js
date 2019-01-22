// Task 1
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
    setTimeout(() => {
        logNumbersResultPlusTen(logNumber);
        console.log('Result: ', logNumber + 10);
        setTimeout(() => {
            logNumbersRusultMultiplyThree(logNumber);
            console.log('Result: ', logNumbersResultPlusTen(logNumber) * 3);
            setTimeout(() => {
                logNumbersRusultMinusTwenty(logNumber);
                console.log('Result: ', logNumbersRusultMinusTwenty(logNumber));
            }, timeout * 3);
        }, timeout * 2);
    }, timeout);
}

logNumbers(10, 1000);
