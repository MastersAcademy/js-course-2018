function fibonacci() {
    const last = Math.random() * 50 + 50;
    const result = [0, 1];
    for (let i = 1; result[i] < last; i++) {
        result.push(result[i] + result[i - 1]);
    }
    return result;
}
fibonacci();

module.exports = { fibonacci };
