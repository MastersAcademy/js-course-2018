const space = ' ';
let str = '####';
let j = 14;
for (let i = 0; i < 15; i++) {
    console.log(space.repeat(j) + str);
    str += '##';
    j--;
}
