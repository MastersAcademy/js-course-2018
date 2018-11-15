function degree(a) {
    return a * a;
}
function array(maxvalue, step) {
    const NewArray = [];
    for (let i = 0; i <= maxvalue; i += step) {
        NewArray.push(i);
    }
    return NewArray;
}
console.log(array(50, 5));
console.log(array(32, 4));
const zArray = array(32, 4);
const xArray = [];
for (let i = 0; i < zArray.length; i++) {
    xArray[i] = degree(zArray[i]);
}
console.log(xArray);
let sum = 0;
for (let i = 0; i < xArray.length; i++) {
    sum += xArray[i];
}
console.log(sum);
