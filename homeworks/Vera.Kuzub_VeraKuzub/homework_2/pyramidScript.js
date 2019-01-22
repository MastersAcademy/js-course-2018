function drawPyramid(inp) {
    const numb = Number(inp);
    if (Number.isNaN(numb)) console.log('It is not a number');
    else {
        let string = '####';
        let numberOfSpace = numb - 1;
        const space = ' ';
        for (let i = 1; i <= numb; i++) {
            let res = space.repeat(numberOfSpace) + string.repeat(1);
            res += space.repeat(numberOfSpace);
            console.log(res);
            numberOfSpace--;
            string += '##';
        }
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Enter an integer: ', (answer) => {
    drawPyramid(answer);
    rl.close();
});
