function math(a) {
    return a * a;
}
function arrayStep(a, b) {
    const arr = [];
    for (let i = 0; i <= a; i += b) {
        arr.push(i);
    }
    return arr;
}
const arr = arrayStep(32, 4);
const arr1 = arr.map(element => math(element));
const c = arr1.reduce((a, b) => a + b, 0);
console.log(c);