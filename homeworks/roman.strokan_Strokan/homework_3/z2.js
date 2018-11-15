let a = 1;
let b;

function exp2(n) {
    if (a > n) {
        return false;
    }
    if (a === n) {
        return true;
    }
    a *= 2;
    return exp2(n);
}

for (let i = 10; i <= 600; i++) {
    b = exp2(i);
    if (b === true) {
        console.log(i);
    }
}
