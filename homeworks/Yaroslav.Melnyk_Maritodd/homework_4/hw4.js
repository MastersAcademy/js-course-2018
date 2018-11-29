function plus(value) {
    console.log(value + 10);
    return value + 10;
}

function multiply(value) {
    console.log(value * 3);
    return value * 3;
}

function minus(value) {
    console.log(value - 20);
    return value - 20;
}

//  Callback function

function logNumberCallback(value) {
    setTimeout(() => {
        const result1 = plus(value);
        setTimeout(() => {
            const result2 = multiply(result1);
            setTimeout(() => {
                minus(result2);
            }, 3000);
        }, 2000);
    }, 1000);
}

logNumberCallback(10);

//  Promise function

function logNumberPromise1(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(plus(value));
        }, 1000);
    });
}

function logNumberPromise2(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(multiply(value));
        }, 2000);
    });
}

function logNumberPromise3(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(minus(value));
        }, 3000);
    });
}

function printAllPromise(value) {
    logNumberPromise1(value)
        .then(logNumberPromise2)
        .then(logNumberPromise3);
}

printAllPromise(10);

//  Async function

async function logNumberAsync(value) {
    const task1 = await logNumberPromise1(value);
    const task2 = await logNumberPromise2(task1);
    await logNumberPromise3(task2);
}

logNumberAsync(10);
