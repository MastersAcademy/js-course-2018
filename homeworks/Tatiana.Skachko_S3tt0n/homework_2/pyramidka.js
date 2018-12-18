const pyrHeight = 17;
const firstStr = '##';
const secondStr = ' ';

for (let i = 2; i < pyrHeight; i++) {
    // eslint-disable-next-line max-len
    console.log(secondStr.repeat((pyrHeight * firstStr.length - firstStr.length * i) / 2) + firstStr.repeat(i));
}
