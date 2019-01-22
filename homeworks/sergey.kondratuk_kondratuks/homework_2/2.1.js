let i = 2; let j = 0;
const length = 17;

while (i < length) {
    let space = ''; let lattice = '';
    for (j = 0; j < length - i; j++) space += ' ';
    for (j = 0; j < 2 * i; j++) lattice += '#';
    console.log(space + lattice);
    i++;
}
