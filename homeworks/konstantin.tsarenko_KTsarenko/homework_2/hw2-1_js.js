const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ведите высоту пирамиды: ', (answer) => {
    if (!Number.isNaN(Math.round(answer))) {
        const height = parseInt(answer, 10) + 2;
        const space = ' ';
        const symbol = '#';
        let i = 2;
        for (i; i < height; i++) {
            const spaceRep = space.repeat(height - i);
            const symbolRep = symbol.repeat(i);
            const strResult = spaceRep + symbolRep + symbolRep + spaceRep;
            console.log(strResult);
        }
        rl.close();
    } else {
        console.log('Ошибка ввода.');
        rl.close();
    }
});
