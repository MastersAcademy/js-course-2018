// Task
function plus(number) {
    console.log(number + 10);
    return number + 10;
}

function multiply(number) {
    console.log(number * 3);
    return number * 3;
}

function minus(number) {
    console.log(number - 20);
    return number - 20;
}

//Callback
function logNumbers(number) {
    setTimeout(() => {
        setTimeout((number1) => {
            setTimeout((number2) => {
                setTimeout(() => {}, 3000, minus(number2));
            }, 2000, multiply(number1));
        }, 1000, plus(number));
    }, 1000);
}

logNumbers(50);

//Promise
function funcPromise(number, result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result(number));
        }, 1000);
    });
}

function logNumbersPromise(number) {
    funcPromise(number, plus)
        .then(result => funcPromise(result, multiply))
        .then(result => funcPromise(result, minus));
}

logNumbersPromise(50);

//Async function
async function logNumbersAsync(number) {
    const num1 = await funcPromise(number, plus);
    const num2 = await funcPromise(num1, multiply);
    await funcPromise(num2, minus)
}

logNumbersAsync(50);