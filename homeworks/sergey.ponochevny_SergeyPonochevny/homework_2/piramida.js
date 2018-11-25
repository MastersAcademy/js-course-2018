const heightcons = 15;
let i;
for (i = 1; i <= heightcons; i++) {
    console.log(' '.repeat(heightcons - i) + '#'.repeat(i * 2 + 2));
}
