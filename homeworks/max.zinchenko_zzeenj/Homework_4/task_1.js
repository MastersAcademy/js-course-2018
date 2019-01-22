function foo(x) {
    return x + 10;
}
function bar(y) {
    return y * 3;
}
function baz(z) {
    return z - 20;
}


// Using Callback
function logNumberCallbacks(n) {
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
logNumberCallbacks(1);


// Using Promise
function validation(n, funcName, t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const promise = funcName(n);
            console.log(promise);
            resolve(promise);
        }, t);
    });
}
function logNumbersPromise(n) {
    validation(n, foo, 1000)
        .then(res => validation(res, bar, 2000))
        .then(res => validation(res, baz, 3000))
        .catch(err => console.log(err));
}
logNumbersPromise(1);


// Using Async
async function logNumberAsync(n) {
    let toPoint = await validation(n, foo, 1000);
    toPoint = await validation(toPoint, bar, 2000);
    await validation(toPoint, baz, 3000);
}
logNumberAsync(1);
