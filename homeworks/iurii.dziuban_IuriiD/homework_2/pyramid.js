// Task #1 from https://github.com/MastersAcademy/js-course-2018/issues/119
const readline = require('readline');

const minPramidHeight = 2;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

function validateInput(userEntered, minHeight) {
    if (Number.isInteger(Number(userEntered)) && Number(userEntered) >= minHeight) {
        return Number(userEntered);
    }
    return false;
}

function drawPyramid(lines) {
    const s = '#';
    const b = ' ';
    const lastRowLength = 4 + 2 * (lines - 1);
    for (let x = 1; x <= lines; x++) {
        const symbols = s.repeat(4) + s.repeat(2 * (x - 1));
        const eachSideBlanksLength = (lastRowLength - symbols.length) / 2;

        console.log(
            b.repeat(eachSideBlanksLength)
                + s.repeat(4)
                + s.repeat(2 * (x - 1))
                + b.repeat(eachSideBlanksLength),
        );
    }
}

function promptHeightAndDraw() {
    rl.question('\nIndicate pyramid\'s height (number of lines, >=2): ', (answer) => {
        const validatedUserInput = validateInput(answer, minPramidHeight);
        if (validatedUserInput) {
            rl.close();
            console.log(`Valid input (${validatedUserInput}), here's our pyramid:\n`);
            drawPyramid(validatedUserInput);
            return;
        }
        console.log(`What you've entered (${answer}) is not a valid input`);
        promptHeightAndDraw();
    });
}

promptHeightAndDraw();
