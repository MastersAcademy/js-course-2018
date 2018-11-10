const i = 15; // высота
const space = ' '; 
const str = '#'; 
let y = 1; 
while (y <= i) {
    console.log (space.repeat (i - y) + str.repeat (y * 2 + 2)); 
    y+=1; 
}
