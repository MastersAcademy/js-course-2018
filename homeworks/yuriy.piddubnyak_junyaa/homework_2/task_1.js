let s;
let i = '##';
const p = ' ';
let z;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Введите количество строк?\n', (x) => {
    z = x;
    if (x == x * 1) {
        for (s = 0; s < x; s++) {
            i += '##';
            z -= 1;
            console.log(p.repeat(z) + i);
        }
        rl.close();
    }
    else {
        console.log('Ошибка, количество строк должно быть числом!');
        rl.close();
    }
});
