const i = 15; // height pyramid
let j = 1;
while (j <= i) {
    console.log(' '.repeat(i - j) + '#'.repeat(j * 2 + 2));
    j++;
}
