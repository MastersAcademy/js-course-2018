function polindrom(min1, max1) {
    for (let i = min1; i <= max1; i++) {
        const str = i.toString();
        if (str[0] === str[str.length - 1]) {
            const res = str;
            console.log('Polindroms: ', res);
        }
    }
}

function check(min1, max1) {
    return ((!Number.isNaN(min1) && min1 > 0)
    && (!Number.isNaN(max1) && max1 > 0)) ? 1 : 0;
}

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question('Enter MIN number from 500 to 1000: ', (min) => {
    r1.question('Enter MAX number from 500 to 1000: ', (max) => {
        const min1 = parseInt(min, 10);
        const max1 = parseInt(max, 10);
        if (check(min, max)) {
            polindrom(min1, max1);
            r1.close();
        } else {
            console.log('Oops! You don\'t input a number!');
            r1.close();
        }
    });
});
