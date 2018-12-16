function stepWithCallback(numeric, callback) {
    setTimeout(
        () => {
            console.log(numeric);
            callback(numeric);
        }, 1000,
    );
}

function logNumbersWithCallback(numeric) {
    stepWithCallback(numeric + 10, (result) => {
        stepWithCallback(result * 3, (result2) => {
            stepWithCallback(result2 - 20, () => {});
        });
    });
}

logNumbersWithCallback(10);
