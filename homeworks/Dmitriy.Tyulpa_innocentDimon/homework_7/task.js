function fibonachi() {
    let a = 0;
    let b = 1;
    const random = Math.floor(Math.random() * 50 + 50);
    const result = [a, b];
    for (let i = 3; i <= random; i++) {
        const c = a + b;
        a = b; b = c;
        result.push(b);
    }
    return result;
}

console.log(fibonachi());
module.exports = { fibonachi };
