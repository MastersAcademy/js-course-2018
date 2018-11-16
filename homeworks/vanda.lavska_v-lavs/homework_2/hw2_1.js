
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter height pyramid: ', (height) => {
    function pyramid() {
        if (`${height}` === '0' || Number.isNaN(Number(`${height}`))) {
            console.log('ERROR. Please,  enter number > 0');
        } else {
            for (let i = 0; i < height; i++) {
                const x = 2 * i + 4;
                const y = (2 * height + 2 - x) / 2;
                let str = '';
                for (let j = 0; j < y; j++) {
                    str += ' ';
                }
                for (let index = 0; index < x; index++) {
                    str += '#';
                }
                console.log(str);
            }
        }
    }
    pyramid(`${height}`);

    rl.close();
});
