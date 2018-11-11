const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function isNumeric(n) {
    return /\d+/i.test(n);
}

// валидация
function valid(start, end) {
    if (isNumeric(start) && isNumeric(end) && start < end && start > 0) { return true; }
    return false;
}

function isPoly(left, right) {
    const { length } = left.toString();
    let equalMatches = 0;
    // сравниваем левю и правую часть зеркально порозрядно.
    for (let i = 0; i < length; i++) {
        if (left[i] === right[length - i - 1]) { equalMatches++; }
    }
    // если кол-во совпавших разрядов равно количеству розрядов - это число-полином.
    return equalMatches === length;
}

function writePolyndroms(start, end) {
    let left; let center; let right;
    // перебор
    for (let i = start; i < end; i++) {
        // делим число на две равные части. если кол-во цифр в числе не четное,
        // то цифру по середине выкидываем в center переменную
        const iLength = i.toString().length;
        center = (iLength % 2 !== 0) ? i.toString().charAt(Math.floor(iLength / 2)) : '';
        left = (i.toString()).slice(0, Math.floor(iLength / 2));
        right = (i.toString()).slice(Math.round(iLength / 2, iLength));
        // проверяем, есть ли число числом-полиндромом
        if (isPoly(left, right)) { console.log(left + center + right); }
    }
}

rl.question('Type a number of rows: ', (start) => {
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
