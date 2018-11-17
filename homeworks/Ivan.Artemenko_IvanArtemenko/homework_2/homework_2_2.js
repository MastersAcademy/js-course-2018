const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the first number from 500 to 1000 ', (numericOne) => {
    rl.question('Enter the second number from 500 to 1000 ', (numericTwo) => {
        const a = numericOne - 0;
        const b = numericTwo - 1;
        if (a >= b) {
            if (b + 1 >= 500 && a - 1 < 1000) {
                for (let i = b; i <= a; i++) {
                    const z = i.toString().split('').reverse().join('');
                    const k = i.toString();
                    if (z === k) {
                        console.log(i);
                    }
                }
            } else console.log('Invalid data enter a number from 500 to 1000');
        } else if (a >= 500 && b < 1000) {
            for (let i = a; i <= b; i++) {
                const z = i.toString().split('').reverse().join('');
                const k = i.toString();
                if (z === k) {
                    console.log(i);
                }
            }
        } else console.log('Invalid data enter a number from 500 to 1000');
        rl.close();
    });
});
