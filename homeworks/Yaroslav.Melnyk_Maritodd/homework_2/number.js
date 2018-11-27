const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function numbers(num) {
    for (let i = 1; i <= num; i++) {
        const str = String(i);
        if (num > 1000) {
            console.log('Error!');
            return;
        }
        if (str.length === 3) {
            if (str[0] === str[2]) {
                console.log(str);
            }
        }
        if (str.length === 4) {
            if (str[0] === str[3] && str[1] === str[2]) {
                console.log(str);
            }
        }
    }
}

rl.question('Enter numbers from 500 to 1000: ', (num) => {
    numbers(num);
    rl.close();
});
