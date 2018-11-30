const someObject = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    return { ...obj };
}

const objCopy = innerCopy(someObject);
console.log(objCopy.d);
