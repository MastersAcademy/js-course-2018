const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function func(value) {
    let i = 2;
    const lt = ' ';
    const str = '#';
    let j;
    if (value > 50) {
        console.log('Вы ввели неправильное число!');
        return;
    }
    for (j = value; j >= 1; j--) {
        i += 2;
        console.log(lt.repeat(j) + str.repeat(i));
    }
}
rl.question('Введите число до 50: ', (value) => {
    func(value);
    rl.close();
});
