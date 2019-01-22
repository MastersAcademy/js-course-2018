
const readline = require('readline');

const pyramidHeight = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

pyramidHeight.question('Введите высоту пирамиды? ', (height) => {
    if (Number.isNaN(Number(height))) {
        console.log('Необходимо ввести число!');
    } else {
        const str = '#';
        const space = ' ';
        let top = 4;
        for (let i = 0; i < height; i++) {
            console.log(space.repeat(height - (i + 1)) + str.repeat(top));
            top += 2;
        }
    }
    pyramidHeight.close();
});
