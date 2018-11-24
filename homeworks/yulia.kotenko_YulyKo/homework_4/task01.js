
function plus10(x) {
    return x + 10;
}
function multiply3(y) {
    return y * 3;
}
function subtract20(z) {
    return z - 20;
}

// callback
function logNumbers(number) {
    setTimeout((res1) => {
        console.log(plus10(res1));
        setTimeout((res2) => {
            console.log(multiply3(res2));
            setTimeout((res3) => {
                console.log(subtract20(res3));
            }, 3000, multiply3(res2));
        }, 2000, plus10(res1));
    }, 1000, number);
}
logNumbers(0);

// promise
function promiseAdd(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number + 10;
            console.log(`add :   ${result}`);
            resolve(result);
        }, 3000);
    });
}

function promiseMultiply(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * 3;
            console.log(`multiply :   ${result}`);
            resolve(result);
        }, 2000);
    });
}

function promiseSubstract(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number - 20;
            console.log(result);
            resolve(result);
            console.log(`substract :   ${result}`);
        }, 1000);
    });
}

function callPromise() {
    return promiseAdd(590).then(promiseMultiply).then(promiseSubstract);
}

callPromise();

// async/await
async function callAwait(number) {
    let result = number;
    result = await promiseAdd(result);
    result = await promiseMultiply(result);
    result = await promiseSubstract(result);
    return result;
}

callAwait(30);
