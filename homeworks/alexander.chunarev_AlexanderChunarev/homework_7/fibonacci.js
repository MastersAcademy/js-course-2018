function fibonacci() {
    const arr = [0, 1];
    const lastNumber = Math.floor(Math.random() * 51 + 50);
    while (arr[arr.length - 1] + arr[arr.length - 2] < lastNumber) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr;
}
module.exports = fibonacci;
