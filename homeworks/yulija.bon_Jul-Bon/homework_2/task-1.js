let str;
let space;
let i = 0;
const max = 15;
while (i < max) {
    str = '##'.repeat(i + 2);
    space = ' '.repeat(max - (i + 1));
    console.log(space + str);
    i++;
}
