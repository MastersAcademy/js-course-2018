const readline = require('readline-sync');
const min = readline.question("What is your min value?");
const max = readline.question("What is your max value?");
console.log(max, min);
let num;
let a, b, c;
for (let i = min; i < max; i++) {
    num = i;
    String(num);
    a = num.toString().slice(0, 1);
    b = num.toString().slice(1, 2);
    c = num.toString().slice(2, 3);
    if ((a === b && b === c) || a === c) {
        console.log(a + b + c);
    }
}
