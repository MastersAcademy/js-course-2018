// task

function randomValue(minValue = 50, maxValue = 100) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

function phibonachi() {
    const n = randomValue();
    const newArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        const arrPhibonachi = newArr[i - 1] + newArr[i - 2];
        if (arrPhibonachi <= n) {
            newArr[i] = arrPhibonachi;
        }
    }
    console.log(newArr);
    return newArr;
}
phibonachi();
module.exports = { phibonachi };
