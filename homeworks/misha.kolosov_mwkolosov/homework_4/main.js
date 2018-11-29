
function sum(number) {
    return number + 10;
}

function multip(number) {
    return number * 3;
}

function subtr(number) {
    return number - 20;
}

function logNumberCallback(number) {
    setTimeout((callback1) => {
        setTimeout((callback2) => {
            setTimeout((callback3) => {
                console.log(subtr(callback3));
            }, 1000, multip(callback2));
            console.log(multip(callback2));
        }, 1000, sum(callback1));
        console.log(sum(callback1));
    }, 1000, number);
}

logNumberCallback(10);

// Promises

function lnPromises(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(number);
            resolve(number);
        }, 1000, number);
    });
}

function logNumberPromises(number) {
    lnPromises(sum(number))
        .then(result => lnPromises(multip(result)))
        .then(result => lnPromises(subtr(result)));
}

logNumberPromises(10);

// Await

async function logNumberAwait(number) {
    let result = number;
    result = await lnPromises(sum(result));
    result = await lnPromises(multip(result));
    result = await lnPromises(subtr(result));
    return result;
}

logNumberAwait(10);
