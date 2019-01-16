function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fibonacci(lengthArray) {
    const arr = [];
    if (lengthArray > 0) {
        arr.push(0);
    }
    if (lengthArray > 1) {
        arr.push(1);
    }
    for (let i = 3; i <= lengthArray; i++) {
        arr.push(arr[i - 2] + arr[i - 3]);
    }
    return arr;
}

module.exports = { fibonacci, randomNumber };
