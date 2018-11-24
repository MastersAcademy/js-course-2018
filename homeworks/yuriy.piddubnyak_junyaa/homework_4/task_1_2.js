const promise = new Promise((resolve) => {
    const number = 100;
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
