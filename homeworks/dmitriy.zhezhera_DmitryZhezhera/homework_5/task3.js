const someObject = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    // Commented code is working but esLint dont want to commit it
    // const clone = {};
    // for (const prop in obj) {
    //     if (typeof obj[prop] === 'object') {
    //         clone[prop] = innerCopy(obj[prop]);
    //     } else {
    //         clone[prop] = obj[prop];
    //     }
    // }
    // return clone;

    return JSON.parse(JSON.stringify(obj));
}

const objCopy = innerCopy(someObject);
console.log(objCopy.d);
