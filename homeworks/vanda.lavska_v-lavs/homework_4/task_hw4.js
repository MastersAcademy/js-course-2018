// ----CALLBAKS----

function logNumbers(n, callback) {
    const res = n + 10;
    setTimeout(() => {
        console.log(res);
        callback(res);
    }, 1000);
}

const callback = (result) => {
    const res = result * 3;
    setTimeout(() => {
        setTimeout(() => console.log(res - 20), 3000);
        console.log(res);
    }, 2000);
};

logNumbers(1, callback);

// ----PROMISE----

const logNum = num => new Promise((resolve, reject) => {
    if (typeof num === 'number') {
        resolve(num);
    } else {
        const error = 'Argument must be number';
        reject(error);
    }
});

const sum = num => new Promise((resolve) => {
    setTimeout(() => {
        resolve(num + 10);
        console.log(num + 10);
    }, 1000);
});

const multiple = result => new Promise((resolve) => {
    setTimeout(() => {
        resolve(result * 3);
        console.log(result * 3);
    }, 2000);
});

const sub = (res) => {
    setTimeout(() => {
        console.log(res - 20);
    }, 3000);
};

const promise = logNum(1);
promise.then(sum).then(multiple).then(sub).catch(console.log);


// ----ASYNC FUNCTION----

async function logNumAsync(num) {
    const first = await sum(num);
    const second = await multiple(first);
    return sub(second);
}
logNumAsync(100);
