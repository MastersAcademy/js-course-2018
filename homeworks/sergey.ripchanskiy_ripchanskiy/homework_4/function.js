// Initialize

function addToTen(num) {
    return num + 10;
}

function multiplyBythree(num) {
    return num * 3;
}

function substractTwenty(num) {
    return num - 20;
}

function newPromise(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, 1000, num);
    });
}

// Callback

function logNumbersCallback(num) {
    setTimeout((firstCalculation) => {
        console.log(addToTen(firstCalculation));
        setTimeout((secondCalculation) => {
            console.log(multiplyBythree(secondCalculation));
            setTimeout((thirdCalculation) => {
                console.log(substractTwenty(thirdCalculation));
            }, 1000, multiplyBythree(secondCalculation));
        }, 1000, addToTen(firstCalculation));
    }, 1000, num);
}

logNumbersCallback(3);

// Promise

function logNumbersPromise(num) {
    newPromise(addToTen(num))
        .then(secondCalculation => newPromise(multiplyBythree(secondCalculation)))
        .then(thirdCalculation => newPromise(substractTwenty(thirdCalculation)));
}

logNumbersPromise(3);

// Async

async function logNumbersAsync(num) {
    let calculation = num;
    calculation = await newPromise(addToTen(calculation));
    calculation = await newPromise(multiplyBythree(calculation));
    await newPromise(substractTwenty(calculation));
}

logNumbersAsync(3);
