const rows = 15; const bloks = '#'; const spaces = ' '; let countrows = rows; let countbloks = 4;

for (let i = 1; i <= rows; i++) {
    console.log(spaces.repeat(countrows) + bloks.repeat(countbloks));
    countrows -= 1;
    countbloks += 2;
}
