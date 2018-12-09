const user = {};

function addKey(obj, keyName, setter) {
    let internalVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return internalVal;
        },
        set(value) {
            internalVal = setter(value);
        },
        enumerable: true,
    });
}

function capitalizeWords(str) {
    return str.toLowerCase().replace(/\b./g, ch => ch.toUpperCase());
}

function normalizePhoneNumber(num) {
    return num.match(/^\+|\d/g).join('');
}

addKey(user, 'fullName', capitalizeWords);
addKey(user, 'phone', normalizePhoneNumber);

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
