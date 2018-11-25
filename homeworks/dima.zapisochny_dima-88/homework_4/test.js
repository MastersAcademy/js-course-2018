// Declaring functions with simple operations..

const sum = number => number + 10;
const prod = number => number * 3;
const sub = number => number - 20;

// Task 1. Using callback.

function logNumber1(number) {
    setTimeout(() => {
        const result1 = sum(number);
        console.log(result1);
        setTimeout(() => {
            const result2 = prod(result1);
            console.log(result2);
            setTimeout(() => {
                const result3 = sub(result2);
                console.log(result3);
            }, 1000);
        }, 1000);
    }, 1000);
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
