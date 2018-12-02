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
const severalObj = { b: 'c', d: { e: 'f' } };
const objCopy = innerCopy(severalObj);
console.log(severalObj.d);
console.log(objCopy.d);
console.log(`severalObj.d === objCopy.d: ${severalObj.d === objCopy.d}`);
