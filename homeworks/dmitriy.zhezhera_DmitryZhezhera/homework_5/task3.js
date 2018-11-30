const someObject = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    return { ...obj };
}

const objCopy = innerCopy(someObject);
someObject.d.e = 'shlyapa';
console.log(objCopy.d);
