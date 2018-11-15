const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

// знаю,что не красиво. не знаю, как иначе.
function printDegreesOf2(rangeStart, rangeEnd) {
    (function nextDegreesOf2(n) {
        if (typeof n === 'undefined') {
            nextDegreesOf2(1);
        }
        if (n * 2 <= rangeEnd) {
            nextDegreesOf2(n * 2);
        }
        if (n >= rangeStart) {
            console.log(n);
        }
    }());
}

// проверка на целое число без знака
function isNumeric(n) {
    return /\d+/i.test(n);
}

// валидация
function valid(start, end) {
    return isNumeric(start) && isNumeric(end) && start <= end && start >= 0;
}

// точка входа
rl.question('Type a start number: ', (start) => {
    rl.setPrompt('Type an end number: ');
    rl.prompt();
    rl.on('line', (end) => {
        rl.close();
        if (valid(start, end)) {
            printDegreesOf2(start, end);
        } else {
            console.log('Bad arguments!');
        }
    });
});
