const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Введите число от 500 до 1000: ', (num) => {
    const number = [];
    if (num <= 1000) {
        for (let i = (500); i <= (+num); i++) {
            if (i.toString() === i.toString().split('').reverse().join('')) {
                number.push(i);
            }
        }
        console.log(number);
        r1.close();
    }
});
