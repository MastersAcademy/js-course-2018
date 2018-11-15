let a;

function exp2(n) {
    if (n > 1) {
        return exp2(n / 2);
    }
    if (n === 1) {
        return true;
    }
    return false;
}
function mainFunc(x, y) {
    for (let i = x; i <= y; i++) {
        a = exp2(i);
        if (a === true) {
            console.log(i);
        }
    }
}
mainFunc(10, 600);
