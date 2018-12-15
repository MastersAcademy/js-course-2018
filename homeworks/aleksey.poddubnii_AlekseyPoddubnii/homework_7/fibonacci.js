const rand = Math.floor(Math.random() * (11 - 10 + 1)) + 10;
function fibonacci(num) {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}
console.log(fibonacci(rand));
module.exports = { fibonacci, rand };
