// Callback

function logNumbers(number, timeout) {
    setTimeout(() => {
        const add = number + 10;
        console.log(`Callback ${add}`);
        setTimeout(() => {
            const multiply = add * 3;
            console.log(`Callback ${multiply}`);
            setTimeout(() => {
                const subtraction = multiply - 20;
                console.log(`Callback ${subtraction}`);
            }, timeout);
        }, timeout);
    }, timeout);
}
logNumbers(1, 1000);

// Promise

function addAction(number, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = number + 10;
            resolve(res);
            console.log(`Promise ${res}`);
        }, timeout);
    });
}

function multiplyAction(number, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = number * 3;
            resolve(res);
            console.log(`Promise ${res}`);
        }, timeout);
    });
}

function subtractionAction(number, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = number - 20;
            resolve(res);
            console.log(`Promise ${res}`);
        }, timeout);
    });
}

function logNumbersByPromise(number, timeout) {
    addAction(number, timeout)
        .then(multiplyAction, timeout)
        .then(subtractionAction, timeout);
}
logNumbersByPromise(2, 1000);

// async

async function logNumbersWithAwait(number, timeout) {
    let res = await addAction(number, timeout);
    res = await multiplyAction(res, timeout);
    await subtractionAction(res, timeout);
}
logNumbersWithAwait(3, 1000);
