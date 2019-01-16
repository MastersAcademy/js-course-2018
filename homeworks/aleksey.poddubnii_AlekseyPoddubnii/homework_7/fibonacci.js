function rand(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fibonacci(num) {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}
console.log(fibonacci(rand(11, 10)));

module.exports = {
    fibonacci,
    rand,
};
