function fibonacci() {
    const arr = [0, 1];
    const rangeNumbers = Math.floor(Math.random() * 50) + 50;
    for (let i = 2; i <= rangeNumbers; i++) {
        const arrElement = arr[i - 1] + arr[i - 2];
        if (arrElement <= rangeNumbers) {
            arr.push(arrElement);
        }
    }
    return arr;
}
module.exports = { fibonacci };
