function plusNumber(numder) {
    return numder + 10;
}

function multiplyNumber(numder) {
    return numder * 3;
}

function minusNumber(number) {
    return number - 20;
}

// Provide callback

function numberCallback(number) {
    setTimeout((number1) => {
        setTimeout((number2) => {
            setTimeout((number3) => {
                console.log(minusNumber(number3));
            }, 1000, multiplyNumber(number2));
            console.log(multiplyNumber(number2));
        }, 1000, plusNumber(number1));
        console.log(plusNumber(number1));
    }, 1000, number);
}
numberCallback(0);

// Promice

function newPromise(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, 1000, num);
    });
}

// Promise
function logNumbersPromise(num) {
    newPromise(plusNumber(num))
        .then(second => newPromise(multiplyNumber(second)))
        .then(third => newPromise((third)));
}

logNumbersPromise(3);

// Async
async function logNumbersAsync(num) {
    let result = num;
    result = await newPromise(plusNumber(result));
    result = await newPromise(multiplyNumber(result));
    await newPromise((result));
}

logNumbersAsync(3);
