const obj = { b: 'c', d: { e: 'f' } };

function innerCopy(copy) {
    const copyObj = {};
    Object.keys(copy).forEach((key) => {
        if (copy[key] != null && typeof copy[key] === 'object') {
            copyObj[key] = innerCopy(copy[key]);
        } else {
            copyObj[key] = copy[key];
        }
    });
    return copyObj;
}
const copyObject = innerCopy(obj);
console.log(copyObject.d);
