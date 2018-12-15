const rand = Math.floor(Math.random() * (11 - 10 + 1)) + 10;
const result = [0, 1];

function fibonacci(num) {
    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}
console.log(fibonacci(rand));
module.exports = { fibonacci, rand };
