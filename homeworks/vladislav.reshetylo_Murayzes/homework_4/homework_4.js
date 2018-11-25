
// callback
function logNumberCallback(number) {
    setTimeout(() => {
        let value = number + 10;
        console.log(`${value} callback`);
        setTimeout(() => {
            value *= 3;
            console.log(`${value} callback`);
            setTimeout(() => {
                value -= 20;
                console.log(`${value} callback`);
            }, 1000);
        }, 1000);
    }, 1000);
}
logNumberCallback(100);

// promise
function logNumberAdd(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const value = number + 10;
            console.log(`${value} promise`);
            resolve(value);
        }, 1000);
    });
}

function logNumberMult(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const value = number * 3;
            console.log(`${value} promise`);
            resolve(value);
        }, 1000);
    });
}

function logNumberSub(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const value = number - 20;
            console.log(`${value} promise`);
            resolve(value);
        }, 1000);
    });
}

function logNumberPromise(number) {
    return logNumberAdd(number).then(logNumberMult).then(logNumberSub);
}
logNumberPromise(100);

// async
async function resolveArter1Second(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, 1000);
    });
}

async function logNumberAsync(number) {
    let value = number;
    value = await resolveArter1Second(value + 10);
    console.log(`${value} async`);
    value = await resolveArter1Second(value * 3);
    console.log(`${value} async`);
    value = await resolveArter1Second(value - 20);
    console.log(`${value} async`);
}
logNumberAsync(100);
