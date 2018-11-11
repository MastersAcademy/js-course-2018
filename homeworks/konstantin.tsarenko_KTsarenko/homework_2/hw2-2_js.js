const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ведите минимальное значение: ', (answer) => {
    const minNum = parseInt(answer, 10);
    rl.question('Ведите максимальное значение: ', (answer2) => {
        if (!Number.isNaN(Math.round(answer2)) && !Number.isNaN(Math.round(answer))) {
            const maxNum = parseInt(answer2, 10);
            for (let i = minNum; i <= maxNum; i++) {
                const num = i.toString();
                if (num === num.split('').reverse().join('')) {
                    console.log(num);
                }
            }
            rl.close();
        } else {
            console.log('Ошибка ввода.');
            rl.close();
        }
    });
});
