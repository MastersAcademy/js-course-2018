const someObj = { b: 'c', d: { e: 'f' } };
function innerCopy(obj) {
    const keys = Object.keys(obj);
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
        if (typeof (obj[keys[i]]) === 'object') {
            newObj[keys[i]] = innerCopy(obj[keys[i]]);
        } else {
            newObj[keys[i]] = obj[keys[i]];
        }
    }
    return newObj;
}
console.log(innerCopy(someObj));
console.log(innerCopy(someObj.d));
