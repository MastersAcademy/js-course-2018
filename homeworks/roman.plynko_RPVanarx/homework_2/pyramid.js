const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(function create() {
    rl.question('Enter a positive integer > 1 : ', (value) => {
        const answer = +value;
        if (typeof answer === 'number' && Number.isInteger(answer) && answer > 1) {
            const str = ['#', '#'];
            str.length = (answer * 2 + 2) / 2;
            for (let i = 2; i < str.length; i++) {
                str[i] = ' ';
            }
            console.log(str.reverse().join('') + str.reverse().join(''));
            for (let i = 2; i < str.length; i++) {
                str[i] = '#';
                console.log(str.reverse().join('') + str.reverse().join(''));
            }
            rl.close();
        } else {
            console.log('Opps you have entered an invalid value, try again');
            create(); // recursion
        }
    });
}());
