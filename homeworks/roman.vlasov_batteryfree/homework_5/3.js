const originalObj = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    const keys = Object.keys(obj);
    const newObj = {};
    keys.forEach((key) => {
        if (typeof obj[key] === 'object') {
            newObj[key] = innerCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}
const newObject = innerCopy(originalObj);

console.log(originalObj);
console.log(newObject);
newObject.b = 7;
newObject.d.e = 5;
console.log('***checking after changes***');
console.log(originalObj);
console.log(newObject);
