function addName(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            const array = value.trim().split(' ').map(elem => elem.toLowerCase()).map(elem => elem[0].toUpperCase() + elem.slice(1));
            protectedVal = array.join(' ').split('-').map(elem => elem[0].toUpperCase() + elem.slice(1)).join('-');
        },
        enumerable: true,
    });
    return obj;
}
let user = addName('fullName', {});
user.fullName = 'aNna-mAria joHNs ';
console.log(user.fullName);

function addPhone(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.replace(/(?!^\+)[^0-9]/g, '');
        },
        enumerable: true,
    });
    return obj;
}
user = addPhone('phone', {});
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
