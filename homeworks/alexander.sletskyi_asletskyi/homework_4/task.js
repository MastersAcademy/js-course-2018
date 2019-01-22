// Callback
function logNumberCallback(number) {
    setTimeout(() => {
        const result1 = number + 10;
        console.log(result1);
        setTimeout(() => {
            const result2 = result1 * 3;
            console.log(result2);
            setTimeout(() => {
                const result3 = result2 - 20;
                console.log(result3);
            }, 3000);
        }, 2000);
    }, 1000);
}

logNumberCallback(1);

// Promise
function operation1(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number + 10;
            console.log(result);
            resolve(result);
        }, 1000);
    });
}

function operation2(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * 3;
            console.log(result);
            resolve(result);
        }, 1000);
    });
}

function operation3(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number - 20;
            console.log(result);
            resolve(result);
        }, 1000);
    });
}

function logNumberPromise(number) {
    operation1(number)
        .then(operation2)
        .then(operation3);
}
logNumberPromise(1);

// Async
async function logNumberAsync(number) {
    let result = await operation1(number);
    result = await operation2(result);
    await operation3(result);
}
logNumberAsync(1);
