// operations;

function plus(number) {
    const result = number + 10;
    console.log(result);
    return result;
}

function multiply(number) {
    const result = number * 3;
    console.log(result);
    return result;
}

function minus(number) {
    const result = number - 20;
    console.log(result);
    return result;
}

// callback;

function logNumberCallBack(number) {
    setTimeout(() => {
        plus(number);
        setTimeout(() => {
            multiply(number);
            setTimeout(() => {
                minus(number);
            }, 3000);
        }, 2000);
    }, 1000);
}

logNumberCallBack(0);

// promise;

function taskOne(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(plus(number));
        }, 1000);
    });
}

function taskTwo(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(multiply(number));
        }, 2000);
    });
}

function taskThree(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(minus(number));
        }, 3000);
    });
}

function logNumberPromise(number) {
    taskOne(number)
        .then(res1 => taskTwo(res1))
        .then(res2 => taskThree(res2))
        .catch((error) => {
            console.log(error);
        });
}

logNumberPromise(2);

// async;

async function logNumbersAsync(number) {
    await taskOne(number);
    await taskTwo(number);
    await taskThree(number);
}

logNumbersAsync(4);
