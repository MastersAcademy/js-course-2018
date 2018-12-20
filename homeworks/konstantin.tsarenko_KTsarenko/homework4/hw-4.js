
function plus(num) {
    const resNum = num + 10;
    return resNum;
}

function mult(num) {
    const resNum = num * 3;
    return resNum;
}

function minus(num) {
    const resNum = num - 20;
    return resNum;
}

// CallBacks

function logNumbersCallback(num) {
    setTimeout(() => {
        let result = plus(num);
        console.log(result);
        setTimeout(() => {
            result = mult(result);
            console.log(result);
            setTimeout(() => {
                result = plus(result);
                console.log(result);
            }, 1000);
        }, 1000);
    }, 1000);
}

logNumbersCallback(5);

// Promise

function numPromis(n, func) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const promise = func(n);
            console.log(promise);
            resolve(promise);
        }, 1000);
    });
}
function resNumPromise(num) {
    numPromis(num, plus)
        .then(res => numPromis(res, mult, 2000))
        .then(res => numPromis(res, minus, 3000))
        .catch(console.error);
}

resNumPromise(5);

// Async

async function resNumAsync(num) {
    let step = await numPromis(num, plus, 1000);
    step = await numPromis(step, mult, 2000);
    await numPromis(step, minus, 3000);
}
resNumAsync(5);
