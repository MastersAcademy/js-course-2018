// Callbacks v1 - only use for delayed log

const delayedLog = (number, timeout) => {
    setTimeout(
        () => {
            console.log(number);
        }, timeout,
    );
};

const logNumbersV1 = (number) => {
    const result1 = number + 10;
    const result2 = result1 * 3;
    const result3 = result2 - 20;
    delayedLog(result1, 1000);
    delayedLog(result2, 2000);
    delayedLog(result3, 3000);
};

logNumbersV1(42);

// Callbacks v2 - use for delayed calculation and send result to next step

const delayedCalculation = (number, calculation, callback) => {
    setTimeout(
        () => {
            const result = calculation(number);
            console.log(result);
            callback(result);
        }, 1000,
    );
};

const logNumbersV2 = (number) => {
    delayedCalculation(number, n => n + 10, (result1) => {
        delayedCalculation(result1, n => n * 3, (result2) => {
            delayedCalculation(result2, n => n - 20, () => {
            });
        });
    });
};

logNumbersV2(42);


// Promise base delayed calculation

const promiseCalculation = (number, calculation) => new Promise((resolve) => {
    setTimeout(() => {
        const result = calculation(number);
        console.log(result);
        resolve(result);
    }, 1000);
});

const promiseLog = (number) => {
    promiseCalculation(number, n => n + 10)
        .then(result => promiseCalculation(result, n => n * 3))
        .then(result => promiseCalculation(result, n => n - 20));
};

promiseLog(42);

// Async\await

const awaitLog = async (number) => {
    let result = number;
    result = await promiseCalculation(result, n => n + 10);
    result = await promiseCalculation(result, n => n * 3);
    await promiseCalculation(result, n => n - 20);
};

awaitLog(42);
