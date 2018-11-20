const s = 500;
const e = 1000;
let x;
let i;

console.log('Palindromes from', s, 'to', e);
for (x = s; x <= e; x++) {
    for (i = s; i <= e; i++) {
        if ((x.toString().split('').reverse().join('')) === i.toString()) {
            if (x % i === 0) {
                console.log(i);
            }
        }
    }
}
