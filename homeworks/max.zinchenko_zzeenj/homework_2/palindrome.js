const readline = require('readline');

const n = readline.createInterface(process.stdin, process.stdout);
n.question('Please enter the min value of palindrome: ', (n1) => {
    n.question('Please enter the max value of palindrome : ', (n2) => {
        if (n1 < 100 || n1 > 1000) {
            console.log('your numbers are not betwen 100 and 1000');
        } else if (n2 < 100 || n2 > 1000) {
            console.log('your number is not between 100 and 1000');
        } else if (n1.match(/^\d+$/) && n2.match(/^\d+$/)) {
            const palindrome = [];
            for (let i = (+n1); i <= (+n2); ++i) {
                if (i.toString().split('').reverse().join('') === i.toString()) {
                    palindrome.push(i);
                }
            }
            console.log('Your palindrome numbers: ', palindrome);
        } else {
            console.log('You have to use only numbers!');
        }
        n.close();
    });
});
