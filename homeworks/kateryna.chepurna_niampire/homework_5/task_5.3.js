
const innerObj = { b: 'c', d: { e: { f: 'g' } } };
function innerCopy(obj) {
    const someObj = Object.keys(obj);
    const newObj = {};
    someObj.forEach((key) => {
        if (typeof (obj[key]) === 'object') {
            newObj[key] = innerCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}

const copyObject = innerCopy(innerObj);

console.log(copyObject);
console.log(copyObject.d);
console.log(copyObject.b);
