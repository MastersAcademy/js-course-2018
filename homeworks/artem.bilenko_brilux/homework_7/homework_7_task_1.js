function rangeNumbers() {
    return Math.floor(Math.random() * 50) + 50;
}

function fibonacci(endOfRange) {
    const arr = [0, 1];
    for (let i = 2; i <= endOfRange; i++) {
        const arrElement = arr[i - 1] + arr[i - 2];
        if (arrElement <= endOfRange) {
            arr.push(arrElement);
        } else {
            break;
        }
    }
    return arr;
}
console.log(fibonacci(rangeNumbers()));
module.exports = { fibonacci };
