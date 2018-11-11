const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter min > 100: ', (min) => {
    rl.question('Enter max < 99999: ', (max) => {
        if ((min === max) || (max < min) || (min < 100) || (max < 100) || (Number.isNaN(Number(min))) || (Number.isNaN(Number(max)))) {
            console.log('Error!');
        }
        else {
            for (i = min; i <= max; i++) {
                let number = i;
                let n = number.toString();
                if (n.length === 3) {
                    if ((n[0] === n[2])) {
                        console.log(n);
                    }
                }
                else if (n.length === 4) {
                    if ((n[0] === n[3]) && (n[1] === n[2])) {
                        console.log(n);
                    }
                }
                else if (n.length === 5) {
                    if ((n[0] === n[4]) && (n[1] === n[3])) {
                        console.log(n);
                    }
                }
            }
        }
        rl.close();

    });
});
