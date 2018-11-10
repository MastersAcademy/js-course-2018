const i = 15; // высота
let y = 1; 
while (y <= i) {
    console.log(' '.repeat(i - y) + '#'.repeat(y * 2 + 2)); 
    y++; 
}
