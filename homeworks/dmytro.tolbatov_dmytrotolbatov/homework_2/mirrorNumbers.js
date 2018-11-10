const readline = require('readline');

const mirrorQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isMirror(str) {
    return str === str.split('').reverse().join('');
}

mirrorQuestion.question('What is the range of numbers? Print two numbers (ex: 500, 1000).', (range) => {
    const rangeArray = range.split(',');
    const min = Number(rangeArray[0]);
    const max = Number(rangeArray[1]);

    if (rangeArray.length > 2 || Number.isNaN(min) || Number.isNaN(max) || min >= max) {
        console.log('Incorrect Input!');
    } else {
        for (let i = min; i < max + 1; i++) {
            if (isMirror(i.toString())) {
                console.log(i);
            }
        }
    }

    mirrorQuestion.close();
});
