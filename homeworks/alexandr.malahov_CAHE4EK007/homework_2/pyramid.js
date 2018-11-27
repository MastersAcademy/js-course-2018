
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getPyramid(height) {
    let i = 2;
    for (let j = height; j >= 1; j--) {
        i += 2;
        console.log(' '.repeat(j) + '#'.repeat(i));
    }
}

function checkPyramidHeight(height) {
    return typeof height !== 'number' || height === 0 || height > 50;
}

rl.question('Enter height pyramid: ', (number) => {
    if (checkPyramidHeight(number)) {
        console.log('Sorry your answer is not correct');
        rl.close();
    }

    getPyramid(number);
    rl.close();
});
