
function logNumber1(ourNumber, callback) {
    setTimeout(() => {
        console.log(ourNumber + 10);
        callback(ourNumber + 10);
    }, 1000);
}

function logNumber2(ourNumber, callback) {
    setTimeout(() => {
        console.log(ourNumber * 3);
        callback(ourNumber * 3);
    }, 2000);
}

function logNumber3(ourNumber) {
    setTimeout(() => {
        console.log(ourNumber - 20);
    }, 3000);
}

function logNumbers(number) {
    logNumber1(number, (firstResult) => {
        logNumber2(firstResult, (secondResult) => {
            logNumber3(secondResult);
        });
    });
}

logNumbers(2);

// Promise

function firstPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number + 10), 1000);
    });
}

function secondPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number * 3), 2000);
    });
}

function thirdPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number - 20), 3000);
    });
}

function AllPromises(x) {
    firstPromise(x)
        .then((plusResult) => {
            console.log(plusResult);
            return secondPromise(plusResult);
        })
        .then((multiplyResult) => {
            console.log(multiplyResult);
            return thirdPromise(multiplyResult);
        })
        .then(minusResult => console.log(minusResult));
}
AllPromises(6);

// Async function

async function finalAsync(number) {
    const number1 = await firstPromise(number);
    await console.log(number1);
    const number2 = await secondPromise(number1);
    await console.log(number2);
    const number3 = await thirdPromise(number2);
    await console.log(number3);
}

finalAsync(3);
