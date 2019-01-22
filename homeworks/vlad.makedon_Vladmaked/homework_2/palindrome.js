
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question('Enter begin: ', (begin) => {
    if (Number.isNaN(parseInt(begin, 10))) {
        console.log('Wrong input! Input a number, please!');
        r1.close();
        return;
    }
    r1.question('Enter end: ', (end) => {
        if (Number.isNaN(parseInt(end, 10))) {
            console.log('Wrong input! Input a number, please!');
            r1.close();
            return;
        }
        r1.close();

        let num;
        let numberLength;
        for (let i = parseInt(begin, 10); i <= parseInt(end, 10); i++) {
            num = i;
            numberLength = num.toString().length - 1;
            for (let lastIndex = numberLength, firstIndex = 0; (lastIndex - firstIndex) >= 1;
                lastIndex--, firstIndex++) {
                if ((num.toString()[lastIndex] === num.toString()[firstIndex])) {
                    if (((lastIndex - firstIndex) === 1) || ((lastIndex - firstIndex) === 2)) {
                        console.log(num);
                    }
                } else break;
            }
        }
    });
});
