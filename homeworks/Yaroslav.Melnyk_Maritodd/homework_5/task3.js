const obj = { b: 'c', d: { e: 'f' } };

function clone(elem) {
    const innerCopy = {};
    Object.keys(elem).forEach((item) => {
        if (typeof elem[item] === 'object') {
            innerCopy[item] = clone(elem[item]);
        } else {
            innerCopy[item] = elem[item];
        }
    });
    return innerCopy;
}

console.log(clone(obj));
console.log(clone(obj.d));
