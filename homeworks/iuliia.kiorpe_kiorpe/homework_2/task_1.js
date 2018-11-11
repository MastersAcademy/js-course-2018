function buildPyramid(x) {
    const sharp = '#';
    const space = ' ';

    for (let i = 0; i < x; i++) {
        console.log(space.repeat(x + 1 - (i + 2)) + sharp.repeat((i + 2) * 2));
    }
}

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');
console.log('Please input text in command line.');

standardInput.on('data', (strings) => {
    if (parseInt(strings, 10) > 0) {
        buildPyramid(parseInt(strings, 10));
    } else {
        console.log('Your input is invalid.');
    }
    process.exit();
});
