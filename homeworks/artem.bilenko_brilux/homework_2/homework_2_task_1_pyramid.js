const readline = require('readline');

const checkHeight = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

checkHeight.question('Enter height of pyramid: ', (height) => {
    checkHeight.close();
    if (!Number.isNaN(height)) {
        const emptiness = ' ';
        const symbol = '#';
        let amountEmptiness = 50;
        let amountSymbol = 2;

        for (let i = 0; i < height; i++) {
            amountSymbol += 2;
            amountEmptiness--;
            const printSymbol = symbol.repeat(amountSymbol);
            const printEmptiness = emptiness.repeat(amountEmptiness);
            console.log(printEmptiness + printSymbol);
        }
    } else {
        console.log('Please, enter a height of pyramid. It must be a number. For example: 15');
    }
});
