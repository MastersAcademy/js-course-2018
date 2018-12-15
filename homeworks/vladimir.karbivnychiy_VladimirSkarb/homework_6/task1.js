const user = {};
function corrName(keyName, obj) {
    let name;
    Object.defineProperty(obj, keyName, {
        enumerable: true,
        configurable: true,
        set(value) {
            name = value.toLowerCase().replace(/(^|\s|[-])\S/g, s => s.toUpperCase());
        },
        get() {
            return name;
        },
    });
}
function corrNumber(keyName, obj) {
    let num;
    Object.defineProperty(obj, keyName, {
        enumerable: true,
        configurable: true,
        set(value) {
            num = value.replace(/(?!^\+)\D+/g, '');
        },
        get() {
            return num;
        },
    });
}
corrName('fullName', user);
corrNumber('phone', user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
