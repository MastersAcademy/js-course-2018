// Use callback

const step1 = number => (number + 10);
const step2 = number => (number * 3);
const step3 = number => (number - 20);

function logNumberCallback(number) {
    setTimeout((result1) => {
        setTimeout((result2) => {
            setTimeout((result3) => {
                console.log(`substract: ${step3(result3)}`);
            }, 3000, step2(result2));
            console.log(`multiply: ${step2(result2)}`);
        }, 2000, step1(result1));
        console.log(`add: ${step1(result1)}`);
    }, 1000, number);
}

logNumberCallback(50);

// Use promise

function promiseStep1(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number + 10;
            console.log(`add: ${result}`);
            resolve(result);
        }, 1000);
    });
}

function promiseStep2(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * 3;
            console.log(`multiply: ${result}`);
            resolve(result);
        }, 2000);
    });
}

function promiseStep3(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number - 20;
            console.log(`substract: ${result}`);
            resolve(result);
        }, 3000);
    });
}

function logNumberPromise() {
    return promiseStep1(50).then(promiseStep2).then(promiseStep3);
}

logNumberPromise();

// Use await

async function logNumberAwait(number) {
    let result = number;
    result = await promiseStep1(result);
    result = await promiseStep2(result);
    result = await promiseStep3(result);
    return result;
}

logNumberAwait(50);
