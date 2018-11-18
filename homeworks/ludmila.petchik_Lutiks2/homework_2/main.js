/* eslint-disable eol-last */

let i = 0;
let j = 0;
const maxstring = 15;

while (i < maxstring) {
    let space = '';
    let star = '***';
    for (j = 0; j < maxstring - i; j++) {
        space += ' ';
    }
    for (j = 0; j < 2 * i + 1; j++) {
        star += '*';
    }
    console.log(space + star);
    i++;
}


const palindr = [];
for (let k = 500; k <= 1000; k++) {
    const mirror = k.toString();
    if (mirror.split('').reverse().join('') === mirror) {
        palindr.push(mirror);
    }
}
console.log(palindr);