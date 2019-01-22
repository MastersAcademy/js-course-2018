function innerCopy(obj) {
    const newObj = {};
    Object.keys(obj).forEach((key) => { newObj[key] = obj[key]; });
    return newObj;
}

const someObj = { b: 'c', d: { e: { s: 'f' } } };

const objCopy = innerCopy(someObj);

console.log(objCopy);
console.log(objCopy.d.e);
