
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter min number ', (min) => {
    rl.question('Enter max number ', (max) => {
        function mirNumArr() {
            const mirrorNum = [];

            if (min < max && Number.isNaN(Number(`${min}`)) && Number.isNaN(Number(`${max}`))) {
                mirNumArr(min, max);
            }

            for (let i = min; i < max; i++) {
                if (i.toString().split('').reverse().join('') === i.toString()) {
                    mirrorNum.push(i);
                }
            }
            console.log(mirrorNum);
        }
        mirNumArr(`${min}`, `${max}`);

        rl.close();
    });
});
