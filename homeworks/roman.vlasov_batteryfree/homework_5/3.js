const originalObj = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    const keys = Object.keys(obj);
    const newObj = {};
    keys.forEach((key) => { newObj[key] = obj[key]; });
    return newObj;
}

console.log(innerCopy(originalObj));
