function rangeNumbers() {
    return Math.floor(Math.random() * 50) + 50;
}

function fibonacci(endOfRange) {
    const arr = [0, 1];
    for (let i = 2; i <= endOfRange; i++) {
        const arrElement = arr[i - 1] + arr[i - 2];
        if (arrElement >= endOfRange) return arr;
        arr.push(arrElement);
    }
    return arr;
}

console.log(fibonacci(rangeNumbers()));
module.exports = { fibonacci };
