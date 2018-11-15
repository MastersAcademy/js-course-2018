function test(a) {
    const b = 2 ** a;
    return (b);
}


//  Get the number from the console
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question('Введите число (от 1 до 1000000000): ', (num) => {
    for (let i = 0; i < Infinity; i++) {
        if (test(i) > num) { i = Infinity; } else { console.log(test(i)); }
    }
    r1.close();
});
