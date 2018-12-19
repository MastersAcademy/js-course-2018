function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fibNumbers(maxNumber, length) {
    const arr = [0, 1];
    for (let elem = 0; elem < length; elem++) {
        const a = arr[elem] + arr[elem + 1];
        if (a <= maxNumber) {
            arr.push(a);
        }
    }
    return arr;
}
console.log(fibNumbers(getRandom(50, 100), 10));
module.exports = { fibNumbers };
