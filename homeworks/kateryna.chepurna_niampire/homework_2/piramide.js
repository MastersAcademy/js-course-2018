const readline = require('readline');

const r1 = readline.createInterface({ input: process.stdin, output: process.stdout });

function func(heightPiramide) {
    let emptySpace = heightPiramide - 1;
    let symb = 2;
    const spaceLeft = ' ';
    const sharpSymbol = '#';

    if (parseInt(heightPiramide, 10) === Number(heightPiramide)) {
        if (heightPiramide <= 100) {
            while (emptySpace > 0) {
                emptySpace--;
                symb += 2;
                console.log(spaceLeft.repeat(emptySpace) + sharpSymbol.repeat(symb));
            }
        } else {
            console.log('It\'s too high');
        }
    } else {
        console.log('It\'s not a number. Please, enter number');
    }
}

r1.question('Enter the height of the piramide: ', (heightPiramide) => {
    func(heightPiramide);
    r1.close();
});
