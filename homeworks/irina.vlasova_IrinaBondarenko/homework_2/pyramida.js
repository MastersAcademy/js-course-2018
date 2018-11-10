const space = ' ';
const symbol = '#';
for (let i = 1; i <= 15; i++) {
    console.log(space.repeat(15 - i) + symbol.repeat(i * 2 + 2));
}
