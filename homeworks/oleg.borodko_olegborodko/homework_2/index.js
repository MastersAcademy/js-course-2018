const pyramidLength = 15; // from 1 to n
const pyramidOffset = 2; // from -1 to n
const pyramidStep = pyramidLength + pyramidOffset;

for (let i = 1 + pyramidOffset; i <= pyramidStep; i++) {
    const spacePart = ' '.repeat(pyramidStep - i);
    const bodyPart = '#'.repeat(i) + '#'.repeat(i - pyramidOffset);
    console.log(spacePart + bodyPart);
}

console.log();

for (let i = 500; i <= 1000; i++) {
    const line = i.toString();
    if (line[line.length - 1] === line[0]) {
        console.log(line);
    }
}
