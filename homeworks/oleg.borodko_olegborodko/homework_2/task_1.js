const pyramidLength = 15; // from 1 to n
const pyramidOffset = 2; // from -1 to n
const pyramidStep = pyramidLength + pyramidOffset;

for (let i = 1 + pyramidOffset; i <= pyramidStep; i++) {
    const spacePart = ' '.repeat(pyramidStep - i);
    const bodyPart = '#'.repeat(i) + '#'.repeat(i - pyramidOffset);
    console.log(spacePart + bodyPart);
}
