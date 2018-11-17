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
const xArray = zArray.map(i => degree(i));
console.log(xArray);
const total = xArray.reduce((sum, current) => sum + current, 0);
console.log(total);
