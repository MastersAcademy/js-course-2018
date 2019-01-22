function amount(number) {
    return number + 10;
}
function product(number) {
    return number * 3;
}
function difference(number) {
    return number - 20;
}

// Callback

function logNumbers(number) {
    setTimeout((number1) => {
        setTimeout((number2) => {
            setTimeout((number3) => {
                console.log(difference(number3));
            }, 3000, product(number2));
            console.log(product(number2));
        }, 2000, amount(number1));
        console.log(amount(number1));
    }, 1000, number);
}

logNumbers(2);

// Promise

function usingPromise(number, result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(result(number));
            resolve(result(number));
        }, 1000, number);
    });
}

function logNumbersPromise(number) {
    usingPromise(number, amount)
        .then(result => usingPromise(result, product))
        .then(result => usingPromise(result, difference));
}

logNumbersPromise(2);

// Await

async function logNumbersAsynchronous(number) {
    const result = await usingPromise(number, amount);
    const result2 = await usingPromise(result, product);
    await usingPromise(result2, difference);
}

logNumbersAsynchronous(2);
