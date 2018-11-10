
const i = 15; // высота
const space = ' '; // пробел
const str = '#'; // символ 
let y = 1; // ряд
while (y <= i) {
    console.log (space.repeat(i - y) + str.repeat(y * 2 + 2)); // повтор пробела 14 раз + 4 символа
    y+=1; // в каждый ряд + 2 символа
}
