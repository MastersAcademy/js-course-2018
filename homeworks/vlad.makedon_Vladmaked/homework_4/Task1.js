function getNumPlusTen(number) {
    return number + 10;
}

function getNumMultipliedByThree(number) {
    return number * 3;
}

function getNumMinusTwenty(number) {
    return number - 20;
}

//  Callback

function callbackLogNumbers(number) {
    setTimeout((result) => {
        console.log(result);
        setTimeout((result2) => {
            console.log(result2);
            setTimeout((result3) => {
                console.log(result3);
            }, 1000, getNumMinusTwenty(result2));
        }, 1000, getNumMultipliedByThree(result));
    }, 1000, getNumPlusTen(number));
}

callbackLogNumbers(10);

//  Promise

function logAndGetPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(number);
            resolve(number);
        }, 1000);
    });
}

function promiseLogNumbers(number) {
    logAndGetPromise(getNumPlusTen(number))
        .then(result => logAndGetPromise(getNumMultipliedByThree(result)))
        .then(result => logAndGetPromise(getNumMinusTwenty(result)));
}

promiseLogNumbers(10);

//  Async/Await

async function asyncLogNumbers(number) {
    let result = number;
    result = await logAndGetPromise(getNumPlusTen(result));
    result = await logAndGetPromise(getNumMultipliedByThree(result));
    await logAndGetPromise(getNumMinusTwenty(result));
}

asyncLogNumbers(10);
