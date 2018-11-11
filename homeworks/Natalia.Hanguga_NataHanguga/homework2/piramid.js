const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question('Enter number>100', (min) => {
    r1.question('Enter number<1000', (max) => {
        console.log(max, min);
        let num;
        let a;
        let b;
        let c;
        for (let i = min; i < max; i++) {
            num = i;
            String(num);
            a = num.toString().slice(0, 1);
            b = num.toString().slice(1, 2);
            c = num.toString().slice(2, 3);
            if ((a === b && b === c) || a === c) {
                console.log(a + b + c);
            }
        }
        r1.close();
    });
});
