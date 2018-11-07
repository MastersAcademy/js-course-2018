const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ведите высоту пирамиды: ', (answer) => {
    let intRegex = /^[0-9]+$/;
    if (intRegex.test(answer)) {
        let height = parseInt(answer);
        let space = " ";
        let symbol = "#";
        let i = 2;
        let repeatStr = height += i;

        for (i; i < repeatStr; i++) {
            let spaceRep = space.repeat(height - i);
            let symbolRep = symbol.repeat(i);
            let strResult = spaceRep + symbolRep + symbolRep + spaceRep;
            console.log(strResult);
        }
        rl.close();
    } else {
        console.log('Ошибка ввода.');
        rl.close();
    }

});



