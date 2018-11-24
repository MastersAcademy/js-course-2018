function addTen(number) {
    const result = number + 10;
    console.log(result);
    return result;
}

function multiplyByThree(number) {
    const result = number * 3;
    console.log(result);
    return result;
}

function substractTen(number) {
    const result = number - 10;
    console.log(result);
    return result;
}

function logUsingCallback(number) {
    console.log('Using callback');
    setTimeout((result1) => {
        setTimeout((result2) => {
            setTimeout((result3) => {
                substractTen(result3);
            }, 1000, multiplyByThree(result2));
        }, 1000, addTen(result1));
    }, 1000, number);
}

function createPromise(number, operation) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(operation(number));
        }, 1000);
    });
}

function logUsingPromise(number) {
    console.log('Using promise');
    createPromise(number, addTen).then((result1) => {
        createPromise(result1, multiplyByThree).then((result2) => {
            createPromise(result2, substractTen);
        });
    });
}

async function logUsingAsync(number) {
    console.log('Using async/await');
    let result = await createPromise(number, addTen);
    result = await createPromise(result, multiplyByThree);
    await createPromise(result, substractTen);
}

function logNumbers(number) {
    logUsingCallback(number);
    setTimeout(logUsingPromise, 4000, number);
    setTimeout(logUsingAsync, 8000, number);
}

logNumbers(0);
