let pyrHeight = 17;
let firstStr = '##';
let secondStr = ' ';

for (i = 2; i < pyrHeight; i++) {
    console.log(secondStr.repeat((pyrHeight * firstStr.length - firstStr.length * i) / 2) + firstStr.repeat(i));
}