function summa(value) {
    return value + 10;
}

function generation(value) {
    return value * 3;
}

function difference(value) {
    return value - 10;
}
// callback
function callback(value) {
    setTimeout((result1) => {
        setTimeout((result2) => {
            setTimeout((result3) => {
                console.log(difference(result3));
            }, 1000, generation(result2));
            console.log(generation(result2));
        }, 1000, summa(result1));
        console.log(summa(result1));
    }, 1000, value);
}

function newPromise(value, operation) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = operation(value);
            console.log(result);
            resolve(result);
        }, 1000, value);
    });
}
// promise
function promise(value) {
    newPromise(value, summa)
        .then(result => newPromise(result, generation))
        .then(result => newPromise(result, difference));
}
// async
async function async(value) {
    let result = await newPromise(value, summa);
    result = await newPromise(result, generation);
    await newPromise(result, difference);
}

function logNumber(value) {
    callback(value);
    setTimeout(promise, 4000, value);
    setTimeout(async, 8000, value);
}

logNumber(0);
