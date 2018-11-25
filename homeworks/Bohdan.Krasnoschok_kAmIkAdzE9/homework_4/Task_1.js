function addNum(num) {
    return num + 10;
}
function multiplyNum(num) {
    return addNum(num) * 3;
}
function minusNum(num) {
    return multiplyNum(num) - 20;
}
// Callback
function callBack(num, funcResult, time, callback) {
    const result = funcResult(num);
    setTimeout(() => {
        console.log(result);
        callback(result);
    }, time);
}
function logNumCallBack(num) {
    callBack(num, addNum, 1000, (var1) => {
        callBack(var1, multiplyNum, 2000, (var2) => {
            callBack(var2, minusNum, 3000, () => {});
        });
    });
}
logNumCallBack(50);
// Promise
function promiseFunc(num, funcResult, time) {
    const result = funcResult(num);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(result);
            resolve(result);
        }, time);
    });
}
function logNumPromise(num) {
    promiseFunc(num, addNum, 1000)
        .then(firstnum => promiseFunc(firstnum, multiplyNum, 2000)
            .then(secondnum => promiseFunc(secondnum, minusNum, 3000)));
}
logNumPromise(50);
// Async function
async function asyncNum(num) {
    const resultFirst = await promiseFunc(num, addNum, 1000);
    const resultSecond = await promiseFunc(resultFirst, multiplyNum, 2000);
    await promiseFunc(resultSecond, minusNum, 3000);
}
asyncNum(50);
