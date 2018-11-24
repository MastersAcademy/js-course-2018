// Declaring functions with simple operations..

const sum = number => number + 10;
const prod = number => number * 3;
const sub = number => number - 20;

// Task 1. Using callback.

function logNumber1(number) {
    setTimeout((callback1) => {
        setTimeout((callback2) => {
            setTimeout((callback3) => {
                console.log(sub(callback3));
            }, 1000, prod(callback2));
            console.log(prod(callback2));
        }, 1000, sum(callback1));
        console.log(sum(callback1));
    }, 1000, number);
}

// Task 2. Using Promise.

function logPromise(number) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                console.log(number);
                resolve((number));
            },
            1000, number,
        );
    });
}

function logNumber2(number) {
    logPromise(sum(number))
        .then(result => logPromise(prod(result)))
        .then(result => logPromise(sub(result)));
}

// Task 3. Using async/await.

async function logNumber3(number) {
    let value = number;
    value = await logPromise(sum(value));
    value = await logPromise(prod(value));
    value = await logPromise(sub(value));
    return value;
}

// Perform all functions.

const logNumbers = (number) => {
    logNumber1(number);
    logNumber2(number);
    logNumber3(number);
};
logNumbers(5);
