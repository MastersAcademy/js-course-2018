const Obj = {
    b: 'c',
    d: { e: 'f' },
};
function innerCopy(mainObj) {
    const copyObj = {};
    for (const key in mainObj) {
        if (copyObj[key] = mainObj[key]);
        return copyObj;
    }
}
console.log(innerCopy(Obj));
console.log(innerCopy(Obj.d));
