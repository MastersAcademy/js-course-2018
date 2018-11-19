const maxValue = 15;
let strSpace;
let strHash;

for (let i = 0; i < maxValue; i++) {
    strSpace = '';
    strHash = '###';
    for (let j = 0; j < maxValue - i; j++) strSpace += ' ';
    for (let j = 0; j < 2 * i + 1; j++) strHash += '#';
    console.log(strSpace + strHash);
}
