const myStr = '##';
const myStr2 = ' ';
let a = 15;
for (let i = 0; i < 15; i++) {
    console.log(myStr2.repeat(a) + myStr.repeat(i + 2));
    a--;
}
