const innerObj = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    const someObj = Object.keys(obj);
    const newObj = {};
    someObj.forEach((key) => {
        newObj[key] = obj[key];
    });
    return newObj;
}

console.log(innerCopy(innerObj));
console.log(innerCopy(innerObj.d));
