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


Promise.resolve(100).then(timer).then(timer2).then(timer3)
    .then(timer4);
