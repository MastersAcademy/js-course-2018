/* Use callback */
function clBack(num, time, callBack) {
    setTimeout(() => {
        console.log(num);
        callBack(num);
    },
    time);
}

function cBackLogNumbers(num) {
    clBack(num + 10, 1000, (result) => {
        clBack(result * 3, 2000, (result1) => {
            clBack(result1 - 20, 3000, () => {});
        });
    });
}

cBackLogNumbers(5);

// Use promise;

function prom(num, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, time);
    });
}

function promLogNumbers(num) {
    prom(num + 10, 1000)
        .then(result => prom(result * 3, 2000))
        .then(result => prom(result - 20, 3000));
}

promLogNumbers(5);

// Use Async/Await (function from promise is used);

async function asyncAwaitLogNumbers(num) {
    let i = await prom(num + 10, 1000);
    i = await prom(i * 3, 2000);
    await prom(i - 20, 3000);
}

asyncAwaitLogNumbers(5);
