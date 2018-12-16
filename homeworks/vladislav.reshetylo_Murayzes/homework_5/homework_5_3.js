// task 3
const protObj = { b: 'c', d: { e: 'f' } };

function innerCopy(object) {
    const cloneObj = {};
    Object.keys(object).forEach((element) => {
        if (typeof object[element] === 'object') {
            cloneObj[element] = innerCopy(object[element]);
        } else {
            cloneObj[element] = object[element];
        }
    });
    return cloneObj;
}
console.log(innerCopy(protObj));
console.log(innerCopy(protObj.d));
