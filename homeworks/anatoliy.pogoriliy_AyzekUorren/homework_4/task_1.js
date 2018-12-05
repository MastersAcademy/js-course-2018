// Base Functions
function firstCalc(number) {
    return number + 10;
}

function secondCalc(number) {
    return number * 3;
}

function thirdCalc(number) {
    return number - 20;
}

// 1.1 CallBacks
function sendCallBack(number, mathFunction, time, callback) {
    const result = mathFunction(number);
    setTimeout(() => {
        console.log(result);
        callback(result);
    }, time);
}

function logNumbersCallBack(number) {
    sendCallBack(number, firstCalc, 1000, (firstSum) => {
        sendCallBack(firstSum, secondCalc, 2000, (secondSum) => {
            sendCallBack(secondSum, thirdCalc, 3000, () => {});
        });
    });
}

logNumbersCallBack(100);

// 1.2 Promise
function createPromiseCalc(number, mathFunction, time) {
    const result = mathFunction(number);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(result);
            resolve(result);
        }, time);
    });
}

function logNumbersPromise(number) {
    createPromiseCalc(number, firstCalc, 1000)
        .then(firstSum => createPromiseCalc(firstSum, secondCalc, 2000))
        .then(secondSum => createPromiseCalc(secondSum, thirdCalc, 3000));
}

logNumbersPromise(100);

// 1.3 Async/Await
async function logNumbers(number) {
    const firstSum = await createPromiseCalc(number, firstCalc, 1000);
    const secondSum = await createPromiseCalc(firstSum, secondCalc, 2000);
    await createPromiseCalc(secondSum, thirdCalc, 3000);
}

logNumbers(100);
