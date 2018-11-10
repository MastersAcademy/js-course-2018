const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

read.question('Enter the height of the pyramid: ', (max) => {
    let i = 0;
    while (i < max) {
        let space = '';
        let sign = '';
        for (let j = 0; j < max - i; j++) space += ' ';
        for (let j = 0; j < 2 * i + 1; j++) sign += '#';
        console.log(space + sign);
        i++;
    }
    read.close();
});
