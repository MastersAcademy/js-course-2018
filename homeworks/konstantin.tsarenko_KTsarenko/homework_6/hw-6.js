
// task 1

const obj = {};
Object.defineProperty(obj, 'fullName', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: '',
});
function addProtectedKey(keyName, obj2) {
    let protectedVal;
    Object.defineProperty(obj2, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.split('-').map(nameUp => nameUp[0].toUpperCase() + nameUp.substring(1)).join(' ');
        },
        enumerable: true,
    });
    return obj2;
}
const obj2 = addProtectedKey('fullName', {});
obj2.fullName = 'aNna-mAria joHNs';
console.log(obj2.fullName);

// Object.defineProperty(userObj, 'phone', {
//     value: '+380(067)440-20-57', configurable: true, writable: true, enumerable: true,
// });

// console.log(userObj.fullName = 'aNna-mAria joHNs');
