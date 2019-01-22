const user = {};

const REG_FIRST_CHAR = new RegExp('\\b\\w', 'g');
const REG_PLUS_NUM = new RegExp('(?!^\\+)\\D', 'g');

function addKeyName(obj) {
    let name;
    Object.defineProperty(obj, 'fullName', {
        configurable: true,
        enumerable: true,
        set(value) {
            name = value.toLowerCase().replace(REG_FIRST_CHAR, s => s.toUpperCase());
        },
        get() {
            return name;
        },
    });
}

function addKeyPhone(obj) {
    let num;
    Object.defineProperty(obj, 'phone', {
        configurable: true,
        enumerable: true,
        set(value) {
            num = value.trim().replace(REG_PLUS_NUM, '');
        },
        get() {
            return num;
        },
    });
}

addKeyName(user);
addKeyPhone(user);

console.log(user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(09 6)-111-22-33';
console.log(user.phone);
user.phone = '38(096)-111-22 -33';
console.log(user.phone);
