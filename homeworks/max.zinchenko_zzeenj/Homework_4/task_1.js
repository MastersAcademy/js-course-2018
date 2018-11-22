// Using Callback
function foo(x) {
    return x + 10;
}
function bar(y) {
    return y * 3;
}
function baz(z) {
    return z - 20;
}
function logNumberCb(n) {
    setTimeout((cb1) => {
        setTimeout((cb2) => {
            setTimeout((cb3) => {
                console.log(baz(cb3));
            }, 3000, bar(cb2));
            console.log(bar(cb2));
        }, 2000, foo(cb1));
        console.log(foo(cb1));
    }, 1000, n);
}
logNumberCb(1);

// Using Promise
function promiseValidation(n, functionName, t) {
    return new Promise((resolve, reject) => {
        if (typeof (n) === 'number') {
            setTimeout(() => {
                const promise = functionName(n);
                console.log(promise);
                resolve(promise);
            }, t);
        } else {
            reject();
        }
    });
}
function logNumbersPromise(n) {
    promiseValidation(n, foo, 1000)
        .then(res => promiseValidation(res, bar, 2000))
        .then(res => promiseValidation(res, baz, 3000))
        .catch(err => console.log(err));
}
logNumbersPromise(1);

// Using Asnyc
