const Obj = {b: 'c', d: {e: 'f',},}
function innerCopy(mainObj){
let copyObj = {};
    for (let key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}
console.log(innerCopy(Obj));
console.log(innerCopy(Obj.d));