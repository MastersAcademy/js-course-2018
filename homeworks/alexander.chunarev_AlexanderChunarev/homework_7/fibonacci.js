function fibonacci(lastNumber) {
    const arr = [0, 1];
    while (true) {
        const newItem = arr[arr.length - 1] + arr[arr.length - 2];
        if (newItem > lastNumber) return arr;
        arr.push(newItem);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 51 + 50);
}

module.exports = {
    fibonacci,
    randomNumber,
};
