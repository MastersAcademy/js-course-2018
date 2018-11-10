const i = 15; // height
const space = ' '; // space
const str = '#'; 
let y = 1; // ряд
while (y <= i) {
    console.log (space.repeat(i - y) + str.repeat(y * 2 + 2)); 
    y+=1; 
}
