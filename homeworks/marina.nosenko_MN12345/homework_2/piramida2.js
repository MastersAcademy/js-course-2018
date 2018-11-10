const i = 15; // высота
const space = ' '; // пробел
const str = '#'; // символ
let y = 1; 
while (y <= i) {
    console.log (' '.repeat (i - y) + '#'.repeat (y * 2 + 2)); 
    y+=1; 
}
