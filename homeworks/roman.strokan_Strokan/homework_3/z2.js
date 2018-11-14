let a = 1;
let b;

function exponentN2(n) {
    if (a > n) {
        return false;
    }
    if (a === n) {
        return true;
    }
    a *= 2;
    return exponentN2(n);
}

for (let i = 10; i <= 600; i++) {
    b = exponentN2(i);
    if (b === true) {
        console.log(i);
    }
}
