const readline = require('readline-sync');

const pyramidHeight = readline.question('Indicate pyramid height: ');

function pyramid() {
    let space = pyramidHeight;
    let height = 4;
    for (let i = 1; i <= pyramidHeight; i++) {
        console.log(' '.repeat(space) + '#'.repeat(height));
        height += 2;
        space -= 1;
    }
}

function validation() {
    if (pyramidHeight < 1 || pyramidHeight > 50 || pyramidHeight === 0) {
        console.log('use number beetween 1-50');
    } else {
        pyramid();
    }
}

validation();
