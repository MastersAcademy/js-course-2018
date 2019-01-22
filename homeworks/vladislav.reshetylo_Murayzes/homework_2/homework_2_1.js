const height = 15; // height pyramid
const space = ' ';
const hash = '#';
let amountSpace = height;
let amountHash = 2;

for (let i = 0; i < height; i++) {
    amountHash += 2;
    amountSpace--;
    const printHash = hash.repeat(amountHash);
    const printSpace = space.repeat(amountSpace);
    console.log(printSpace + printHash);
}
