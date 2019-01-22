// Base data
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

function promisefunc(number, Func) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Func(number));
        }, 1000);
    });
}

// callbeck
function logNumbers1(number) {
    setTimeout(() => {
        setTimeout((res1) => {
            setTimeout((res2) => {
                setTimeout(() => {}, minus(res2));
            }, 1000, multiply(res1));
        }, 1000, plus(number));
    }, 1000);
}

logNumbers1(20);

// Promise
function logNumbers2(number) {
    promisefunc(number, plus)
        .then(result => promisefunc(result, multiply))
        .then(result => promisefunc(result, minus));
}
logNumbers2(20);

// Async
async function logNumbers3(number) {
    const awaitNum1 = await promisefunc(number, plus);
    const awaitNum2 = await promisefunc(awaitNum1, multiply);
    await promisefunc(awaitNum2, minus);
}
logNumbers3(20);
