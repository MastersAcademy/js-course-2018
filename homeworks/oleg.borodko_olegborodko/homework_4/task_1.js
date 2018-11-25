function step(numeric) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                console.log(numeric);
                resolve(numeric);
            }, 1000,
        );
    });
}

function logNumbers(numeric) {
    if (typeof numeric !== 'number') {
        return false;
    }

    step(numeric + 10)
        .then(result => step(result * 3))
        .then(result => step(result - 20));

    return true;
}


async function logNumbersAwait(numeric) {
    if (typeof numeric !== 'number') {
        return false;
    }
    const result1 = await step(numeric + 10);
    const result2 = await step(result1 * 3);
    await step(result2 - 20);

    return true;
}

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

// Test1
logNumbers(100);

// Test2
logNumbersAwait(1);

// Test3
logNumbersWithCallback(10);
