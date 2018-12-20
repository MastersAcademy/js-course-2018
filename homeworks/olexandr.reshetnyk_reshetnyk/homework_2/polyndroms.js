const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function isNumeric(n) {
    return /\d+/i.test(n);
}

// валидация
function valid(start, end) {
    return isNumeric(start) && isNumeric(end) && start < end && start > 0;
}

function isPoly(left, right) {
    const { length } = left.toString();
    let equalMatches = 0;
    // сравниваем левю и правую часть зеркально порозрядно.
    for (let i = 0; i < length; i++) {
        if (left[i] === right[length - i - 1]) { equalMatches++; }
    }
    // если кол-во совпавших разрядов равно количеству разрядов - это число-полином.
    return equalMatches === length;
}

function writePolyndroms(start, end) {
    // перебор
    for (let i = start; i < end; i++) {
        // делим число на две равные части. если кол-во цифр в числе не четное,
        // то цифру по середине выкидываем в center переменную
        const { length } = i.toString();
        const center = (length % 2 !== 0) ? i.toString().charAt(Math.floor(length / 2)) : '';
        const left = (i.toString()).slice(0, Math.floor(length / 2));
        const right = (i.toString()).slice(Math.round(length / 2, length));
        // проверяем, есть ли число числом-полиндромом
        if (isPoly(left, right)) { console.log(left + center + right); }
    }
}

rl.question('Type a start number: ', (start) => {
    rl.setPrompt('Type an end number: ');
    rl.prompt();
    rl.on('line', (end) => {
        rl.close();
        if (valid(start, end)) {
            writePolyndroms(start, end);
        } else {
            console.log('You entered bad arguments!');
        }
    });
});
