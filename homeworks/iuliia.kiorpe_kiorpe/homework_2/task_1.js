function buildPiramid(x) {
    const sharp = '#';
    const space = ' ';
    const hlenght = x + 1;

    for (let i = 0; i < x; i++) {
        console.log(space.repeat(hlenght - (i + 2)) + sharp.repeat((i + 2) * 2));
    }
}

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');
console.log('Please input text in command line.');

standardInput.on('data', (strings) => {
    strings = parseInt(strings, 10); // eslint-disable-line no-param-reassign
    if (strings > 0) {
        buildPiramid(strings);
    } else {
        console.log('Your input is invalid.');
    }
    process.exit();
});
