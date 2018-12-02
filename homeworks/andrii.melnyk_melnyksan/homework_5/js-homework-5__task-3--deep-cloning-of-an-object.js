// Implement innerCopy function that copy an object with embedded objects,
// i.e., to make a deep cloning of an object.

// Source object:

const someSourceObject = { b: 'c', d: { e: 'f' } };

// I don't know how to do it at the moment. But ...
// Let's See... Let's know, learn and master something new ;)
console.log('\nLet\'s See... Let\'s know, learn and master something new ;)\n');

function doodadForCloningAnObject(sourceObject) {
    const arrayWithKeysOfSourceObject = Object.keys(sourceObject);
    const clone = {};
    arrayWithKeysOfSourceObject.forEach((key) => {
        if (sourceObject[key] != null && typeof (sourceObject[key]) === 'object') {
            clone[key] = doodadForCloningAnObject(sourceObject[key]);
        } else {
            clone[key] = sourceObject[key];
        }
    });
    return clone;
}

const objectClone = doodadForCloningAnObject(someSourceObject);

console.log('someSourceObject', someSourceObject);
console.log('objectClone', objectClone);
console.log('objectClone.d', objectClone.d);

console.log('\nLet\'s check it out more.\n');

someSourceObject.b = 21;
objectClone.d.e = 'I did it!';

console.log('someSourceObject', someSourceObject);
console.log('objectClone', objectClone);

console.log('\nAs we see, changing in the source object does not effect on the copied object,');
console.log('and vice versa.');
