/*  I know it could be better, especially with readline functionality,
but I didn't find out how to make it correctly via 'rl.on' to ask it in a loop :( */
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
let parsed;
function buildingPyramid() {
    rl.question('Enter the height of pyramid: ', (height) => {
        parsed = parseInt(height, 10);
        if (typeof (parsed) === 'number' && height % 1 === 0) {
            console.log('Here you are!');
            const initialStroke = '#';
            const space = ' ';
            let amountOfSpace = 0;
            for (let i = 1; i <= height; i++) {
                amountOfSpace++;
                const stroke = initialStroke.repeat((2 * i) + 2);
                const spaceBefore = space.repeat(height - amountOfSpace);
                console.log(`${spaceBefore}${stroke}`);
            }
            process.exit();
        } else {
            console.log('Please, enter only integers!');
            buildingPyramid();
        }
    });
}
buildingPyramid();
