// Exersize 1
// 1.1

function squerearg(arg) {
    return arg * arg;
}
console.log(squerearg(5));
console.log(squerearg(15));
console.log(squerearg(53));

// 1.2
function addstepnum(step, maxvalue) {
    const stepnum = [];
    let i;
    for (i = 0; i <= maxvalue; i += step) {
        stepnum.push(i);
    }
    return stepnum;
}
console.log(addstepnum(5, 50));
console.log(addstepnum(4, 32));

// 1.3

function square(stepnum) {
    return stepnum.map(elem => elem * elem);
}
console.log(square(addstepnum(4, 32)));

// 1.4

function sumarr(stepnum) {
    return stepnum.reduce((sum, elem) => sum + elem);
}
console.log(sumarr(square(addstepnum(4, 32))));

// Exersize 2

function stepen(mynum) {
    const result = mynum / 2;
    if (result < 2) {
        return false;
    }
    if (result === 2) {
        return true;
    }
    return stepen(result);
}
for (let i = 10; i <= 600; i++) {
    if (stepen(i)) {
        console.log(i);
    }
}
console.log(stepen(2));
