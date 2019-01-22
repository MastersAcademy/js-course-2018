/* Callback */
function logNumbersCallback(num) {
    let tempNum = num + 10;
    setTimeout(() => {
        console.log(tempNum);
        tempNum *= 3;
        setTimeout(() => {
            console.log(tempNum);
            tempNum -= 20;
            setTimeout(() => {
                console.log(tempNum);
            }, 3000);
        }, 2000);
    }, 1000);
}

logNumbersCallback(5);

/* Promise */
function promise(num, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num), timeout);
    });
}

function logNumbersPromise(num) {
    let temp = num + 10;
    promise(temp, 1000).then(console.log);
    temp *= 3;
    promise(temp, 2000).then(console.log);
    temp -= 20;
    promise(temp, 3000).then(console.log);
}

logNumbersPromise(5);

/* Await */
function print(num, time) {
    setTimeout(() => console.log(num), time);
}

async function logNumbersAwait(num) {
    let temp = num + 10;
    await print(temp, 1000);
    temp *= 3;
    await print(temp, 2000);
    temp -= 20;
    await print(temp, 3000);
}

logNumbersAwait(5);
