function addition(number) {
    return number + 10;
}

function multiplication(number) {
    return number * 3;
}

function subtraction(number) {
    return number - 20;
}

// Callback

function logNumbers(number) {
    setTimeout((number0) => {
        setTimeout((number10) => {
            setTimeout((number3) => {
                console.log(subtraction(number3));
            }, 3000, multiplication(number10));
            console.log(multiplication(number10));
        }, 2000, addition(number0));
        console.log(addition(number0));
    }, 1000, number);
}

logNumbers(10);

// Promise

function logPromise(number, doFunction, time) {
    return new Promise((resolve) => {
        const promise = doFunction(number);
        setTimeout(
            () => {
                console.log(promise);
                resolve(promise);
            }, time,
        );
    });
}

function logNumbersPromise(number) {
    logPromise(number, addition, 1000)
        .then(result => logPromise(result, multiplication, 2000))
        .then(result => logPromise(result, subtraction, 3000));
}
logNumbersPromise(5);

// async/await

async function logNumbersAsync(number) {
    const await1 = await logPromise(number, addition, 1000);
    const await2 = await logPromise(await1, multiplication, 2000);
    logPromise(await2, subtraction, 3000);
}
logNumbersAsync(7);
