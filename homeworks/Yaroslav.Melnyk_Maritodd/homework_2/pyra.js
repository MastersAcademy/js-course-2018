const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function pyra(num) {
    let j;
    let i = 2;
    const spc = ' ';
    const str = '#';
    for (j = num; j >= 1; j--) {
        i += 2;
        console.log(spc.repeat(j) + str.repeat(i));
    }
}

rl.question('Enter number of strings: ', (num) => {
    pyra(num);
    rl.close();
});
