function innerCopy(obj) {
    const newObj = {};
    Object.keys(obj).forEach((key) => { newObj[key] = obj[key]; });
    return newObj;
}
const severalObj = { b: 'c', d: { e: 'f' } };
const objCopy = innerCopy(severalObj);
console.log(objCopy);
console.log(objCopy.d.e);
