function randomMaxNumber() {
    return Math.floor(Math.random() * (100 - 50) + 50);
}

const maxNumber = randomMaxNumber();

function fibanacci(finishNum) {
    const arr = [0];
    for (let i = 0; i <= finishNum; i++) {
        if (i === 0 || i === 1) {
            arr.push(1);
        } else {
            i = arr[arr.length - 1] + arr[arr.length - 2];
            if (i <= finishNum) {
                arr.push(i);
            }
        }
    }
    return arr;
}

console.log(fibanacci(maxNumber));

module.exports = { randomMaxNumber, fibanacci };
