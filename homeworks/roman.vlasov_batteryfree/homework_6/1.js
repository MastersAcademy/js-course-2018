const user = {};

function addKeyName(keyName, obj) {
    let a;
    Object.defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        set(value) {
            a = value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        },
        get() {
            return a;
        },
    });
}

function addKeyPhone(keyName, obj) {
    let b;
    Object.defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        set(value) {
            b = value.trim().replace(/(?!^\+)\D/g, '');
        },
        get() {
            return b;
        },
    });
}

addKeyName('fullName', user);
addKeyPhone('phone', user);

console.log(user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(09 6)-111-22-33';
console.log(user.phone);
user.phone = '38(096)-111-22 -33';
console.log(user.phone);
