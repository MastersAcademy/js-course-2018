function fibonacci() {
    const max = Math.random() * 51 + 50;
    const result = [0, 1];
    for (let i = 1; result[i] < max; i++) {
        result.push(result[i] + result[i - 1]);
    }
    return result;
}

fibonacci();

module.exports = { fibonacci };
