const number = 100;
const promise = new Promise((resolve) => {
    resolve(number);
});
promise.then((result) => {
    const x = result + 10;
    setTimeout(() => {
        console.log(x);
    }, 2000);

    const y = x * 3;
    setTimeout(() => {
        console.log(y);
    }, 3000);

    const z = y - 20;
    setTimeout(() => {
        console.log(z);
    }, 4000);
});
