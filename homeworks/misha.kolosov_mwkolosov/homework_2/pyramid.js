const str = '##';
const line = 17;
for (let i = 2; i < line; i++) {
    console.log(' '.repeat((line * str.length - str.length * i) / 2) + str.repeat(i));
}
