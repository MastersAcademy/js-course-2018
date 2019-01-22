
const obj = { b: 'c', d: { e: 'f' } };

function innerCopy(someObj) {
    const objCopy = {};
    Object.keys(someObj).forEach((key) => {
        if (typeof objCopy[key] === 'object') {
            objCopy[key] = innerCopy(someObj[key]);
        } else {
            objCopy[key] = someObj[key];
        }
    });
    return objCopy;
}

const copyObj = innerCopy(obj);

console.log(copyObj);
console.log(copyObj.d);

// copyObj and obj are not dependent on each other, because:
// obj.b = 'a';
// console.log(copyObj.b); // c
// console.log(obj.b); // a
