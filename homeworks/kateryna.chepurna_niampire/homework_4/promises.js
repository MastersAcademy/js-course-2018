function sumNumb(number) {
    return number + 10;
}
function multipleNumb(number) {
    return number * 3;
}
function substractNumb(number) {
    return number - 20;
}

// 1.1 CallBacks

function createCallback(number, funcMath, time, callback) {
    const result = funcMath(number);
    setTimeout(() => {
        console.log(result);
        callback(result);
    }, time);
}
function logNumbersCallback(number) {
    createCallback(number, sumNumb, 1000, (firstValue) => {
        createCallback(firstValue, multipleNumb, 2000, (secondValue) => {
            createCallback(secondValue, substractNumb, 3000, () => {});
        });
    });
}
logNumbersCallback(30);


// 1.2 Promise

function createPromise(number, funcMath, time) {
    const result = funcMath(number);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(result);
            resolve(result);
        }, time);
    });
}
function logNumbersPromise(number) {
    createPromise(number, sumNumb, 1000)
        .then(firstValue => createPromise(firstValue, multipleNumb, 2000))
        .then(secondValue => createPromise(secondValue, substractNumb, 3000));
}
logNumbersPromise(30);


//  1.3 Async/Await

async function logNumbersAsync(number) {
    const firstValue = await createPromise(number, sumNumb, 1000);
    const secondValue = await createPromise(firstValue, multipleNumb, 2000);
    await createPromise(secondValue, substractNumb, 3000);
}
logNumbersAsync(30);
