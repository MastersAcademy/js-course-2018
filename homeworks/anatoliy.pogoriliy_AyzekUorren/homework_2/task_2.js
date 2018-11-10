const readline = require('readline');
const { rangePalindromes } = require('./palindrome');

function checkVulue(start, end) {
    if (!start || !end) {
        return false;
    }
    if (start > 500 || end > 1000 || start > end) {
        return false;
    }
    return true;
}

const rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
console.log('Palindome\nStart maximum: 500. end maximum: 1000');
rl.question('Please enter start number:', (start) => {
    rl.question('Please enter end number:', (end) => {
        const strfStart = +start;
        const strfEnd = +end;
        if (!checkVulue(strfStart, strfEnd)) {
            console.log(`Wrong params: ${strfStart},${strfEnd}`);
            rl.close();
            return;
        }
        console.log(rangePalindromes(strfStart, strfEnd));
        rl.close();
    });
});
