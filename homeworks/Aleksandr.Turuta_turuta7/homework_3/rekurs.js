function fun(n) {
    let c = n;
    for (let a = 0; a < n; a++) {
        if (c === 1) { return true; }
        c /= 2;
    }
    return false;
}

//  Get the number from the console
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question('Insert the number (from 2 to 1000000000): ', (num) => {
    for (let n = 2; n <= num; n++) {
        if (fun(n) === true) {
            console.log(n);
        }
    }
    r1.close();
});
