const readline = require('readline');

const checkHeight = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

checkHeight.question('Enter height of pyramid: ', (height) => {
    checkHeight.close();
    if (!isNaN(height)) {
        let emptiness = ' ';
        let symbol = '#';
        let amountEmptiness = 50;
        let amountSymbol = 2;

        for (let i = 0; i < height; i++) {
            amountSymbol = amountSymbol + 2;
            amountEmptiness--;
            let printSymbol = symbol.repeat(amountSymbol);
            let printEmptiness = emptiness.repeat(amountEmptiness);
            console.log(printEmptiness + printSymbol);
        }
    } else {
        console.log('Please, enter a height of pyramid. It must be a number. For example: 15');
    }
});


