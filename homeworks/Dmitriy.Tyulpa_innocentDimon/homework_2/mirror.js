
const readline = require('readline');

const mirrorRange = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isMirror(str) {
    return str === str.split('').reverse().join('');
}

mirrorRange.question('Введите диапазон чисел через пробел: ', (range) => {
    const rangeArray = range.split(' ');
    const min = Number(rangeArray[0]);
    const max = Number(rangeArray[1]);
    if (rangeArray.length > 2 || Number.isNaN(min) || Number.isNaN(max) || min >= max) {
        console.log('Введите правильный диапазон');
    } else {
        for (let i = min; i < max + 1; i++) {
            if (isMirror(i.toString())) {
                console.log(i);
            }
        }
    }
    mirrorRange.close();
});
