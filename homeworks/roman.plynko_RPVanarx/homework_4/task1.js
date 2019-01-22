// task 1.1 Callback
function stepOne(number) {
    return number + 10;
}

function stepTwo(number) {
    return number * 3;
}

function stepThree(number) {
    return number - 20;
}


function logNumbersCallback(num) {
    setTimeout((value1) => {
        setTimeout((value2) => {
            setTimeout((value3) => {
                console.log(stepThree(value3));
            }, 3000, stepTwo(value2));
            console.log(stepTwo(value2));
        }, 2000, stepOne(value1));
        console.log(stepOne(value1));
    }, 1000, num);
}

logNumbersCallback(5);

// task 1.2 Promise

function promiseCalc(number, operation, delay) {
    return new Promise((resolve, reject) => {
        if (typeof (number) === 'number') {
            setTimeout(() => {
                const value = operation(number);
                console.log(value);
                resolve(value);
            }, delay);
        } else {
            reject();
        }
    });
}

function logNumbersPromise(number) {
    promiseCalc(number, stepOne, 1000)
        .then(response => promiseCalc(response, stepTwo, 2000))
        .then(response => promiseCalc(response, stepThree, 3000))
        .catch(error => console.log(error));
}

logNumbersPromise(5);

// task 1.3 async await

async function logNumbersAsync(number) {
    let value = await promiseCalc(number, stepOne, 1000);
    value = await promiseCalc(value, stepTwo, 2000);
    promiseCalc(value, stepThree, 3000);
}

logNumbersAsync(5);
