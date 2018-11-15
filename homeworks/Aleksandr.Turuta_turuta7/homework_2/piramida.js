// Get the number from the console
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Pyramid function
function func(num) {
    let i = 2;
    const bs = ' ';
    const str = '#';
    let j;
    if (num > 50) {
        console.log('Число больше 50');
        return;
    }
    for (j = num; j >= 1; j--) {
        i += 2;
        console.log(bs.repeat(j) + str.repeat(i));
    }
}

rl.question('Ввкдите количкство строк (до 50шт.): ', (num) => {
    func(num);
    rl.close();
});
