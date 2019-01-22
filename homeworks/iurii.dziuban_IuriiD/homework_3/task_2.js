// Task 2 from https://github.com/MastersAcademy/js-course-2018/issues/313

/**
 * Дано діапазон натуральних чисел від 10 до 600 включно.
 * Вивести числа, які є степінню двійки (1, 2, 4, 16, 512, etc).
 * Для перевірки числа на відповідність степенню двійки використовуйте рекурсію
 * *** Додати можливість вводити діапазон значень для перевірки.
 * Для цього можна використовувати readline
 */

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

function checkIfPowOf2(n) {
    const result = n / 2;
    if (result === 2) return true;
    if (result < 2) return false;
    return checkIfPowOf2(result);
}

function getPows2(min, max) {
    const result = [];
    if (min <= 1) result.push(1);
    if (min <= 2) result.push(2);
    for (let i = min; i <= max; i++) {
        if (checkIfPowOf2(i)) result.push(i);
    }
    return result;
}

function displayPowsOf2() {
    rl.question('Please indicate number interval in format "min-max" (e.g. 10-600): ', (answer) => {
        const validatedUserInput = validateInput(answer);
        if (validatedUserInput) {
            rl.close();
            console.log(
                `Input (${validatedUserInput.min}-${
                    validatedUserInput.max
                }) is Ok, here are the numbers which correspond to 2^x:`,
            );
            const result = getPows2(validatedUserInput.min, validatedUserInput.max);
            console.log(result);
            return;
        }
        console.log(`What you've entered (${answer}) is not a valid input`);
        displayPowsOf2();
    });
}

displayPowsOf2();
