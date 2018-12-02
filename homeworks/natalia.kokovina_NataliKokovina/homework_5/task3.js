
const obj = { b: 'c', d: { e: 'f' } };

const objCopy = {};
function innerCopy(someObj) {
    Object.keys(someObj).forEach((key) => {
        objCopy[key] = someObj[key];
    });
}

innerCopy(obj);

console.log(objCopy);
console.log(objCopy.d);
