const someObj = {
    b: 'c',
    d: { e: 'f' },
};
function innerCopy(mainObj) {
    const copyObj = {};
    for (const key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}
console.log(innerCopy(someObj));
console.log(innerCopy(someObj.d));
