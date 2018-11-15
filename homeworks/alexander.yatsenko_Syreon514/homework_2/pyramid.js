function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        const str = ' '.repeat(n - i);
        const str2 = '#'.repeat(i * 2 + 2);
        console.log(str + str2);
    }
}

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Specify the height of the pyramid (rows): ', (answer) => {
    const responce = parseInt(answer, 10);
    if (Number.isNaN(responce)) {
        console.log('The value you were entered is not correct. Use integers');
    } else {
        pyramid(Math.round(responce));
    }
    rl.close();
});
