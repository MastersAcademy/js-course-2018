function numbers(callback) {
    const number = 100; // input number
    const x = number + 10;
    setTimeout(() => callback(x), 1000);
    const z = x * 3;
    setTimeout(() => callback(z), 2000);
    const y = z - 20;
    setTimeout(() => callback(y), 3000);
}
numbers(console.log);
