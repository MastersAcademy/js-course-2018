const readline = require('readline-sync');
const height = readline.question("What is your pyraid`s height?");
let startWidth = 4;
let str = '#';
let s = '*';
let str1 = '';
for (let i = 0; i < height; i++) {
    console.log(str1.concat(s.repeat(height - 1 - i)).concat(str.repeat(startWidth)).concat(s.repeat(height - 1 - i)));
    startWidth += 2;
}
