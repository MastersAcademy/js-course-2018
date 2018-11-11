const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Indicate pyramid height: ', (answer) => {
    const pyramidHeight = parseInt(answer, 10);
    if (pyramidHeight < 1 || pyramidHeight > 50 || pyramidHeight === 0) {
        console.log('use number beetween 1-50');
        rl.close();
    } else {
        let space = pyramidHeight;
        let height = 4;
        for (let i = 1; i <= pyramidHeight; i++) {
            console.log(' '.repeat(space) + '#'.repeat(height));
            height += 2;
            space -= 1;
        }
    }
    rl.close();
});
