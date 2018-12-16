function fibonaci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

console.log(fibonaci(Math.random() * (100 - 50) + 50));

exports.fibonaci = fibonaci;
