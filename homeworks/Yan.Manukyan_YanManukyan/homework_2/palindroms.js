function reverse(str) {
    let reversed = '';
    for (let j = str.length - 1; j >= 0; j--) {
        reversed += str[j];
    }
    return reversed;
}
const a = 500;
const b = 1000;
for (let i = a; i < b; i++) {
    if (i.toString() === reverse(i.toString())) {
        console.log(i);
    }
}
