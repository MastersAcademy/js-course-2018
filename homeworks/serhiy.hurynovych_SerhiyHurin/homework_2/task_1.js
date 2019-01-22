const gap = ' ';
const body = '#';
for (let i = 1; i <= 15; i++) {
    console.log(gap.repeat(15 - i) + body.repeat(i * 2 + 2));
}
