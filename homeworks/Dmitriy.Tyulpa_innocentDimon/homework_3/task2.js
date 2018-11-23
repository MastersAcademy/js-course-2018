/**
 * 2 Рекурсія
 * Дано діапазон натуральних чисел від 10 до 600 включно.
 * Вивести числа, які є степінню двійки (1, 2, 4, 16, 512, etc).
 * Для перевірки числа на відповідність степенню двійки використовуйте рекурсію
 *** Додати можливість вводити діапазон значень для перевірки.
 * Для цього можна використовувати readline
 */

function power(number) {
    if (number === 1) { return true; }
    if (number <= 1) { return false; }
    return power(number / 2);
}

const readline = require('readline');

const inputRange = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

inputRange.question('Введите диапазон чисел через пробел: ', (range) => {
    const rangeArray = range.split(' ');
    const min = rangeArray[0];
    const max = rangeArray[1];
    for (let i = min; i <= max; i++) {
        if (power(i) === true) {
            console.log(i);
        }
    }
    inputRange.close();
});
