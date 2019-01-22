/* Small copy. Nested object passed reference;
function innerCopy(input) {
    const objCopy = Object.assign({}, input);
    return objCopy;
}

console.log(innerCopy(obj)); */

function interCopy(input) {
    const result = {}; // new empty object;
    Object.keys(input).forEach((key) => {
        if (typeof (input[key]) === 'object') {
            interCopy(input[key]);
        }
        result[key] = input[key];
    });
    return result;
}

const obj = { b: 'c', d: { e: 'f' } };
const objCopy = interCopy(obj);

console.log(objCopy);
