const obj = { b: 'c', d: { e: 'f' } };
function innerCopy(newObj) {
    return Object.assign({}, newObj);
}
const objCopy = innerCopy(obj);
console.log(objCopy);
console.log(objCopy.d);
