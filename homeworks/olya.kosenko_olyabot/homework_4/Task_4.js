// Callback
function sum(a) {
    return a + 10;
}
function multiply(b) {
    return b * 3;
}
function subtraction(c) {
    return c - 20;
}

function logNumbersCallback(number) {
    setTimeout(() => {
        const resultSum = sum(number);
        console.log(resultSum);
        setTimeout(() => {
            const resultMultiply = multiply(resultSum);
            console.log(resultMultiply);
            setTimeout(() => {
                const resultSubtraction = subtraction(resultMultiply);
                console.log(resultSubtraction);
            }, 3000);
        }, 2000);
    }, 1000);
}
logNumbersCallback(10);
// Promise

function sum1(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((number + 10));
        }, 1000);
    });
}
function multiply1(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((number * 3));
        }, 2000);
    });
}

function subtraction1(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((number - 20));
        }, 3000);
    });
}

function logNumbersPromise(number) {
    sum1(number)
        .then((result) => {
            console.log(result);
            return multiply1(result);
        })
        .then((result) => {
            console.log(result);
            return subtraction1(result);
        })
        .then((result) => {
            console.log(result);
        });
}
logNumbersPromise(10);

// Async/await
async function logNumbersAsync(number) {
    const sumResult = await sum1(number);
    console.log(sumResult);
    const multiplyResult = await multiply1(sumResult);
    console.log(multiplyResult);
    const subtractionResult = await subtraction1(multiplyResult);
    console.log(subtractionResult);
}
logNumbersAsync(10);
