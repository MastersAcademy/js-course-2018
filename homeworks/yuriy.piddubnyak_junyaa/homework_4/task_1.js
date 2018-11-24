const number = 100; // input number

function numbers(callback) {
    const x = number + 10;
    setTimeout(() => callback(x), 1000);
    const z = x * 3;
    setTimeout(() => callback(z), 2000);
    const y = z - 20;
    setTimeout(() => callback(y), 3000);
}
numbers((result) => {
    console.log(result);
});
