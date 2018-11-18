/*
2 Рекурсія
Дано діапазон натуральних чисел від 10 до 600 включно. Вивести числа, які є степінню двійки (1, 2, 4, 16, 512, etc).
Для перевірки числа на відповідність степенню двійки використовуйте рекурсію

*** Додати можливість вводити діапазон значень для перевірки. Для цього можна використовувати readline
 */

function isPowerOf2(number) {
    if (number === 1) return true;
    if (number%2 === 1) return false;
    return (isPowerOf2(number/2));
}

function print(min, max) {
    for (let i=min; i<=max; i++) {
        if (isPowerOf2(i)) console.log(i);
    }
    rl.close();
}

let start = 0;
let end = 0;

const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', function(line) {
    if (start === 0) {
        start = line.trim();
        console.log('Enter the maximum value of the interval: ');
    }
    else {
        end = line.trim();
        print(start, end);
    }
}).on('close', function() {
    process.exit(0);
});

console.log('Enter the minimal value of the interval: ');
