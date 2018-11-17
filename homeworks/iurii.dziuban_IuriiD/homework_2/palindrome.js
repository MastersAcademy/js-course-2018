// Task #2 from https://github.com/MastersAcademy/js-course-2018/issues/119
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

function validateInput(userEntered) {
    const [min, max] = userEntered.split('-');
    if (
        Number.isInteger(Number(min))
        && Number.isInteger(Number(max))
        && Number(max) > Number(min)
        && Number(min) >= 0
        && min !== ''
        && max !== ''
    ) {
        return { min, max };
    }
    return false;
}

function findPalindromes(min, max) {
    if (max < 11) return `No palindromes found in interval ${min}-${max}`;
    let lowerBoundary;
    if (min < 10) {
        lowerBoundary = 10;
    } else {
        lowerBoundary = Number(min);
    }
    const palindromes = [];
    for (let x = lowerBoundary; x <= max; x++) {
        const intStringified = x.toString();
        let leftHalf;
        let righHalf;
        if (intStringified.length % 2 === 0) {
            leftHalf = intStringified.substring(0, intStringified.length / 2);
            righHalf = intStringified.substring(intStringified.length / 2);
        } else {
            leftHalf = intStringified.substring(0, Math.floor(intStringified.length / 2));
            righHalf = intStringified.substring(Math.floor(intStringified.length / 2 + 1));
        }
        if (
            leftHalf
            === righHalf
                .split('')
                .reverse()
                .join('')
        ) {
            palindromes.push(x);
        }
    }
    return palindromes.join(', ');
}

function promptIntervalAndGetPalindromes() {
    rl.question(
        '\nPlease indicate number interval in format "min-max" (e.g. 500-1000): ',
        (answer) => {
            const validatedUserInput = validateInput(answer);
            if (validatedUserInput) {
                rl.close();
                console.log(
                    `Input (${validatedUserInput.min}-${
                        validatedUserInput.max
                    }) is Ok, palindromes found:`,
                );
                const palindromes = findPalindromes(validatedUserInput.min, validatedUserInput.max);
                console.log(palindromes);
                return;
            }
            console.log(`What you've entered (${answer}) is not a valid input`);
            promptIntervalAndGetPalindromes();
        },
    );
}

promptIntervalAndGetPalindromes();
