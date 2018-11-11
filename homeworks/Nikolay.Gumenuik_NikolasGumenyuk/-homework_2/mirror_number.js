const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question('Enter number>100', (min) => {
    r1.question('Enter number<1000', (max) => {
        console.log(max, min);
        let num;
        let x;
        let y;
        let z;
        for (let i = min; i < max; i++) {
            num = i;
            String(num);
            x = num.toString().slice(0, 1);
            y = num.toString().slice(1, 2);
            z = num.toString().slice(2, 3);
            if ((x === y && y === z) || x === z) {
                console.log(x + y + z);
            }
        }
        r1.close();
    });
});
