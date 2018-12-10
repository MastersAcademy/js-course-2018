function addName(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            const letter = /\b\w/g;
            protectedVal = value.toLowerCase().replace(letter, elem => elem.toUpperCase());
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
            const symbol = /(?!^\+)[^0-9]/g;
            protectedVal = value.replace(symbol, '');
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
