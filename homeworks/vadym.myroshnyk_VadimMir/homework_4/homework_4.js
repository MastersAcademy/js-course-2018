const number = 10;
const sum = number + 10;
const mult = sum * 3;
const minus = mult - 20;

// callback
function callbackFunction(num, time, callback) {
    setTimeout(
        () => {
            console.log(num);
            callback();
        }, time,
    );
}

function logNumber() {
    callbackFunction(sum, 1000, () => {
        callbackFunction(mult, 1000, () => {
            callbackFunction(minus, 1000, () => {});
        });
    });
}

logNumber(number);

// promise
function promiseFunction(num, time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num), time);
    });
}

function addAll() {
    promiseFunction(sum, 1000)
        .then(() => promiseFunction(mult, 1000))
        .then(() => promiseFunction(minus, 1000))
        .then(console.log);
}

addAll(number);

// async await

async function addAllnumber() {
    const sumNumber = await promiseFunction(sum, 1000);
    console.log(sumNumber);
    const multNumber = await promiseFunction(mult, 1000);
    console.log(multNumber);
    const minusNumber = await promiseFunction(minus, 1000);
    console.log(minusNumber);
}

addAllnumber(number);
