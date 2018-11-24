function plus(number) {
    return number + 10;
}

function multiply(number) {
    return number * 3;
}

function subtraction(number) {
    return number - 10;
}

function usingCallback(number) {
    console.log('using callback');
    setTimeout((result1) => {
        setTimeout((result2) => {
            setTimeout((result3) => {
                console.log(subtraction(result3));
            }, 1000, multiply(result2));
            console.log(multiply(result2));
        }, 1000, plus(result1));
        console.log(plus(result1));
    }, 1000, number);
}

function createPromise(number, arithmeticOperation) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = arithmeticOperation(number);
            console.log(result);
            resolve(result);
        }, 1000, number);
    });
}

function usingPromise(number) {
    console.log('using promise');
    createPromise(number, plus)
        .then(result => createPromise(result, multiply))
        .then(result => createPromise(result, subtraction));
}

async function usingAsync(number) {
    console.log('using async function');
    let result = await createPromise(number, plus);
    result = await createPromise(result, multiply);
    await createPromise(result, subtraction);
}

function logNumbers(number) {
    usingCallback(number);
    setTimeout(usingPromise, 4000, number);
    setTimeout(usingAsync, 8000, number);
}

logNumbers(1);
