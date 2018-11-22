// Task 1. Using callback.
function sum(number, callback) {
    setTimeout(
        () => {
            const result = number + 10;
            console.log(result);
            callback((result));
        },
        1000,
    );
}

function prod(number, callback) {
    setTimeout(
        () => {
            const result = number * 3;
            console.log(result);
            callback((result));
        },
        1000,
    );
}

function quot(number, callback) {
    setTimeout(
        () => {
            const result = number - 20;
            console.log(result);
            callback((result));
        },
        1000,
    );
}

function logNumber1(number) {
    sum(number, (result) => {
        prod(result, (nextresult) => {
            quot(nextresult, () => {
            });
        });
    });
}

// Task 2. Using Promise.
function sum2(number) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                const result = number + 10;
                console.log(result);
                resolve((result));
            },
            1000,
        );
    });
}

function prod2(number) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                const result = number * 3;
                console.log(result);
                resolve((result));
            },
            1000,
        );
    });
}

function quot2(number) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                const result = number - 20;
                console.log(result);
                resolve((result));
            },
            1000,
        );
    });
}

function logNumber2(number) {
    sum2(number)
        .then(result => prod2(result))
        .then(result => quot2(result));
}

// Task 3. Using async/await.
async function logNumber3(number) {
    let value = number;
    value = await sum2(value);
    value = await prod2(value);
    value = await quot2(value);
    return value;
}

// Perform all functions.
const logNumbers = (number) => {
    logNumber1(number);
    logNumber2(number);
    logNumber3(number);
};
logNumbers(5);
