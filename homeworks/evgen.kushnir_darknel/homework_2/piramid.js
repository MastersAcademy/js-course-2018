const symbol = '#';
let startNumber = 4;
const emptySpace = ' ';
let emptySpaceNumber = 14;

for (let i = 0; i < 15; i++) {
    console.log(emptySpace.repeat(emptySpaceNumber) + symbol.repeat(startNumber));
    startNumber += 2;
    emptySpaceNumber -= 1;
}
