const user = {};

const regularFirstChar = new RegExp('\\b\\w', 'g');
const regularPlusNum = new RegExp('(?!^\\+)\\D', 'g');

function addKeyName(keyName, obj) {
    let name;
    Object.defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        set(value) {
            name = value.toLowerCase().replace(regularFirstChar, s => s.toUpperCase());
        },
        get() {
            return name;
        },
    });
}

function addKeyPhone(keyName, obj) {
    let num;
    Object.defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        set(value) {
            num = value.trim().replace(regularPlusNum, '');
        },
        get() {
            return num;
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
