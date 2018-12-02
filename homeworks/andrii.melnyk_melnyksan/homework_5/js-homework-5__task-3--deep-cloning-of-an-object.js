// Implement innerCopy function that copy an object with embedded objects,
// i.e., to make a deep cloning of an object.

// Source object:

// const someSourceObject = { b: 'c', d: { e: 'f' } };

// function cloneObject(originalObject) {
//     const clone = {};
//     for (const element in originalObject) {
//         if (originalObject[element] != null && typeof (originalObject[element]) == 'object') {
//             clone[element] = cloneObject(originalObject[element]);
//         } else {
//             clone[element] = originalObject[element];
//         }
//     }
//     return clone;
// }

// const objectCopy = cloneObject(someSourceObject);

// console.log(objectCopy.d);

// It's kind of works, but ESLint tells me to find another way.
// I sort things out how to do it.
