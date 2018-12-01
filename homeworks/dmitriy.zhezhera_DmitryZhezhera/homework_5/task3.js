const someObject = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    const clone = {};
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object') {
            clone[key] = innerCopy(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    });
    return clone;
}

const objCopy = innerCopy(someObject);
console.log(objCopy.d);
console.log('===TEST===');
console.log('origin_', someObject);
console.log('copy_', objCopy);
console.log('===Change TEST===');
someObject.d.e = 'shlyapa';
objCopy.d.e = 'h';
console.log('origin_', someObject);
console.log('copy_', objCopy);
