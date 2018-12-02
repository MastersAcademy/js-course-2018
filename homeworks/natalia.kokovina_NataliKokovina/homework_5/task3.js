
const obj = { b: 'c', d: { e: 'f' } };

function innerCopy(someObj) {
    const objCopy = {};
    Object.keys(someObj).forEach((key) => {
        objCopy[key] = someObj[key];
    });
    return objCopy;
}

const copyObj = innerCopy(obj);

console.log(copyObj);
console.log(copyObj.d);
