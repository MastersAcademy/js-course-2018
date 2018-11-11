const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter min > 100: ', (min) => {
    rl.question('Enter max < 99999: ', (max) => {
        if ((min === max) || (max < min) || (min < 100)
            || (max < 100) || (Number.isNaN(Number(min))) || (Number.isNaN(Number(max)))) {
            console.log('Error!');
        } else {
            for (let i = min; i <= max; i++) {
                const number = i;
                const numString = number.toString();
                if (numString.length === 3) {
                    if ((numString[0] === numString[2])) {
                        console.log(numString);
                    }
                } else if (numString.length === 4) {
                    if ((numString[0] === numString[3]) && (numString[1] === numString[2])) {
                        console.log(numString);
                    }
                } else if (numString.length === 5) {
                    if ((numString[0] === numString[4]) && (numString[1] === numString[3])) {
                        console.log(numString);
                    }
                }
            }
        }
        rl.close();
    });
});
