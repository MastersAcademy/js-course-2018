const promise = new Promise((resolve) => {
    resolve(100);
});

function timer(value) {
    return value + 10;
}
function timer2(value) {
    setTimeout(() => {
        console.log(value);
    }, 1000);
    return value * 3;
}
function timer3(value) {
    setTimeout(() => {
        console.log(value);
    }, 2000);
    return value - 20;
}
function timer4(value) {
    setTimeout(() => {
        console.log(value);
    }, 3000);
}

promise.then(v => timer(v)).then(v => timer2(v)).then(v => timer3(v)).then(v => timer4(v));
