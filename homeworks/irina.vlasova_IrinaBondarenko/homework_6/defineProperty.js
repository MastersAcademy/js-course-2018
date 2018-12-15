const user = {};
function addName(keyName, obj) {
    let name;
    Object.defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        set(value) {
            name = value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        },
        get() {
            return name;
        },
    });
}
function addNumber(keyName, obj) {
    let num;
    Object.defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        set(value) {
            num = value.replace(/(?!^\+)\D/g, '');
        },
        get() {
            return num;
        },
    });
}
addName('fullName', user);
addNumber('phone', user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
