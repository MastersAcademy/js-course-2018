const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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
    let height = parseInt(answer);
    if (isNaN(height)) console.log('ERROR ', answer, ' IS NOT A NUMBER !!!');
    else drawPyramid(height);
    rl.close();
});