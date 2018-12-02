function innerCopy(object, depth = 1) {
    const copy = Object.assign({}, object);
    if (depth > 0) {
        const objectEntries = Object.entries(copy).filter(entry => typeof entry[1] === 'object');
        objectEntries.forEach((entry) => {
            copy[entry[0]] = innerCopy(entry[1], depth - 1);
        });
    }
    return copy;
}

const obj = { b: 'c', d: { e: 'f' } };
const objCopy = innerCopy(obj);

console.log('obj.d:');
console.log(obj.d);

console.log('\nobjCopy.d:');
console.log(objCopy.d);

console.log(`\nobj.d === objCopy.d: ${obj.d === objCopy.d}`);
