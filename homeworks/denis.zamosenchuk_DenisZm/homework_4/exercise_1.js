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

function delayedCalculation(number, calculation, callback) {
    setTimeout(
        () => {
            const result = calculation(number);
            console.log(result);
            callback(result);
        }, 1000,
    );
}

function logNumbersV2(number) {
    delayedCalculation(number, n => n + 10, (result1) => {
        delayedCalculation(result1, n => n * 3, (result2) => {
            delayedCalculation(result2, n => n - 20, () => {});
        });
    });
}

logNumbersV2(42);
