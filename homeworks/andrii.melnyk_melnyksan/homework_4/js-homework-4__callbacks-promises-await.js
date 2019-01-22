// Here it is callback based solution of this task, or another words - Callback style.

function callbackPattern(number, timeout, callback) {
    setTimeout(
        () => {
            console.log(number);
            callback(number);
        },
        timeout,
    );
}

function callbackLogNumbers(number) {
    callbackPattern(number + 10, 1000, (result1) => {
        callbackPattern(result1 * 3, 2000, (result2) => {
            callbackPattern(result2 - 20, 3000, () => {});
        });
    });
}

callbackLogNumbers(21);

// Here it is in Promise style.

function promiseAndAwaitPattern(number, timeout) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                console.log(number);
                resolve(number);
            },
            timeout,
        );
    });
}

function promiseLogNumbers(number) {
    promiseAndAwaitPattern(number + 10, 1000)
        .then(result => promiseAndAwaitPattern(result * 3, 2000))
        .then(result => promiseAndAwaitPattern(result - 20, 3000));
}

promiseLogNumbers(21);

// And Await. The function stays the same as the Promise version.

async function awaitLogNumbers(number) {
    // let serviceNumber;
    let serviceNumber = await promiseAndAwaitPattern(number + 10, 1000);
    serviceNumber = await promiseAndAwaitPattern(serviceNumber * 3, 2000);
    await promiseAndAwaitPattern(serviceNumber - 20, 3000);
}

awaitLogNumbers(21);
