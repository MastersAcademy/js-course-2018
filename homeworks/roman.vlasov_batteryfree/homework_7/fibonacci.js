function fibonacci() {
    const arr = [0, 1];

    const num = Math.floor(Math.random() * 50 + 50);

    for (let i = 3; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 3]);
    }
    return arr;
}
module.exports = { fibonacci };
