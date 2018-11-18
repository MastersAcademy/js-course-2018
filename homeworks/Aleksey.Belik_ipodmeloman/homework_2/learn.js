const str = '##';
const space = ' ';
let h = 15;
for (let i = 0; i < 15; i++) {
    console.log(space.repeat(h) + str.repeat(i + 2));
    h--;
}
