const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const drawPyramid = (height) => {
    for (let i = 0, total = height + 4, q = 0; i < total; i++) {
        if (i >= 4) {
            console.log(' '.repeat(total - i - 1) + '#'.repeat(i + q));
            q += 1;
        }
    }
};

rl.question('PLEASE ENTER HEIGHT ', (answer) => {
    const height = parseInt(answer, 10);
    if (Number.isNaN(height)) console.log('ERROR ', answer, ' IS NOT A NUMBER !!!');
    else drawPyramid(height);
    rl.close();
});
