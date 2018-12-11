let space = 10;
let topLine = 4;
for (let i = 1; i <= space; i++) {
    console.log(''.repeat(space) + '#'.repeat(topLine));
    topLine += 2;
    space -= 1;
}
