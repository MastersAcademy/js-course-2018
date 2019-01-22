const obj = { b: 'c', d: { e: 'f' } };
function innerCopy(newObj) {
    const copy = {};
    Object.keys(newObj).forEach((key) => {
        if (typeof newObj[key] !== 'object') {
            copy[key] = newObj[key];
        } else {
            copy[key] = innerCopy(newObj[key]);
        }
    });
    return copy;
}
const objCopy = innerCopy(obj);
console.log(objCopy);
console.log(objCopy.d);
