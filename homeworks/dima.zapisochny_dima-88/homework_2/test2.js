const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the minimum value.\nOnly numbers are allowed for input, and they must be more than nine.\nEnter min: ', (min) => {
    rl.question('Enter the maximum value.\nOnly numbers are allowed for input, and they must be more than nine.\nEnter max:  ', (max) => {
        if (Number(min) === min && Number(max) === max && min > 9 && max > 10 && min < max) {
            for (let i = min; i <= max; i++) {
                const str = i.toString();
                const Numb = i;
                let reverse = '';
                let j = str.length - 1;
                for (j; j >= 0; j--) {
                    reverse += str[j];
                    const reverseNumb = +reverse;
                    if (reverse.length === str.length && Numb === reverseNumb) {
                        console.log(reverseNumb);
                    }
                }
            }
        } else {
            console.log('Error: Only numbers are allowed for input, and they must be more than nine');
        }
        rl.close();
    });
});
