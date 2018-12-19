function getFibSequence(limit) {
    if (limit === 0) return [0];
    const result = [0, 1];
    for (;;) {
        const nextVal = result[result.length - 1] + result[result.length - 2];
        if (nextVal > limit) return result;
        result.push(nextVal);
    }
}

function getRandomNumberInRange(start, limit) {
    return Math.floor(Math.random() * (limit + 0.99 - start) + start);
}

module.exports = {
    getFibSequence,
    getRandomNumberInRange,
};
