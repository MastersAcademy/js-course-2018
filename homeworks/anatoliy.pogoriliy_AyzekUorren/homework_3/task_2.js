const readline = require('readline');
const getArrayPowerOfTwo = require('./arrayPowerOfTwo');

function checkVulue(start, end) {
    if ((!start || !end) || (start > end)) {
        return false;
    }
    return true;
}

const rl = readline.createInterface(process.stdin, process.stdout);
process.stdin.setEncoding('utf8');
console.log('End number must be more than start');
rl.question('Please enter start number:', (start) => {
    rl.question('Please enter end number:', (end) => {
        const strfStart = +start;
        const strfEnd = +end;
        if (!checkVulue(strfStart, strfEnd)) {
            console.log(`Wrong params: ${strfStart},${strfEnd}`);
            rl.close();
            return;
        }
        console.log(getArrayPowerOfTwo(strfStart, strfEnd));
        rl.close();
    });
});
