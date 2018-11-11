let i = 0; let j = 0; const lines = 15; let space = ''; let sharp = '';
while (i < lines) {
    space = '';
    sharp = '###';
    for (j = 0; j < lines - i; j++) space += ' ';
    for (j = 0; j < 2 * i + 1; j++) sharp += '#';
    i++;
    console.log(space + sharp);
}
