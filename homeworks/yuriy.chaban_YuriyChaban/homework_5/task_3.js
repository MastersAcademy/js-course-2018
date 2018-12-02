const obj = {
    b: 'c',
    d: {
        e: 'f',
    },
};

function innerCopy(objectToCheck) {
    if (objectToCheck === null || typeof objectToCheck !== 'object') {
        return objectToCheck;
    }
    if (objectToCheck instanceof Object) {
        const copy = {};
        Object.keys(objectToCheck).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(objectToCheck, key)) {
                copy[key] = innerCopy(objectToCheck[key]);
            }
        });
        console.log('copy: ', copy);
        return copy;
    }
    throw new Error('Unable to copy obj this object.');
}

innerCopy(obj.d);
