// Callback functions
let initialNumber = 10;
function plusTenCallback(number, callback) {
    setTimeout(() => {
        callback(number + 10);
    }, 1000);
}
function multiplyByTreeCallback(number, callback) {
    setTimeout(() => {
        callback(number * 3);
    }, 2000);
}
function minusTwentyCallback(number, callback) {
    setTimeout(() => {
        callback(number - 20);
    }, 3000);
}
function performAllCallbacks() {
    plusTenCallback(initialNumber, (plusResult) => {
        console.log(plusResult);
        multiplyByTreeCallback(plusResult, (multiplyResult) => {
            console.log(multiplyResult);
            minusTwentyCallback(multiplyResult, (minusResult) => {
                console.log(minusResult);
            });
        });
    });
}
performAllCallbacks();
// Promise functions
function plusTenPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number + 10), 1000);
    });
}
function multiplyByTreePromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number * 3), 2000);
    });
}
function minusTwentyPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number - 20), 3000);
    });
}
function performAllPromises() {
    plusTenPromise(initialNumber)
        .then((plusResult) => {
            console.log(plusResult);
            return multiplyByTreePromise(plusResult);
        })
        .then((multiplyResult) => {
            console.log(multiplyResult);
            return minusTwentyPromise(multiplyResult);
        })
        .then(minusResult => console.log(minusResult));
}
performAllPromises();
// Async functions
async function performAllAsync() {
    initialNumber = await plusTenPromise(initialNumber);
    await console.log(initialNumber);
    initialNumber = await multiplyByTreePromise(initialNumber);
    await console.log(initialNumber);
    initialNumber = await minusTwentyPromise(initialNumber);
    await console.log(initialNumber);
}
performAllAsync();
