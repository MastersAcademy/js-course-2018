// promise
function createPromise(number, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, time);
    });
}

function logNumbersPromise(number) {
    createPromise((number + 10), 1000)
        .then(console.log)
        .then(createPromise((number + 10) * 3, 2000)
            .then(console.log))
        .then(createPromise((number + 10) * 3 - 20, 3000)
            .then(console.log));
}
logNumbersPromise(5);
