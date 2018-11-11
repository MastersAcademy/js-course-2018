const readline = require('readline');

const r1 = readline.createInterface({ input: process.stdin, output: process.stdout });

function check(minNumb, maxNumb) {
    if (parseInt(minNumb, 10) === Number(minNumb) && parseInt(maxNumb, 10) === Number(maxNumb)) {
        if ((minNumb > 0 && maxNumb >= 0) || (minNumb >= 0 && maxNumb > 0)) {
            if (minNumb > maxNumb) {
                const changeMinNumb = minNumb;
                const changeMaxNumb = maxNumb;
                for (let i = changeMaxNumb; i <= changeMinNumb; i++) {
                    if (i.toString() === i.toString().split('').reverse().join('')) {
                        console.log(i);
                    }
                }
            }
            for (let i = minNumb; i <= maxNumb; i++) {
                if (i.toString() === i.toString().split('').reverse().join('')) {
                    console.log(i);
                }
            }
        } else {
            console.log('It\' a negative number. Enter correct value.');
        }
    } else {
        console.log('It\'s not a number. Enter correct value.');
    }
}

r1.question('Enter minimal number : ', (minNumb) => {
    r1.question('Enter maximal number : ', (maxNumb) => {
        check(parseInt(minNumb, 10), parseInt(maxNumb, 10));
        r1.close();
    });
});
