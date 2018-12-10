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
    const WORD_FIRST_CHAR = /\b./g;
    return str.toLowerCase().replace(WORD_FIRST_CHAR, ch => ch.toUpperCase());
}

function normalizePhoneNumber(num) {
    const FIRST_PLUS_OR_ANY_DIGITS = /^\+|\d/g;
    return num.match(FIRST_PLUS_OR_ANY_DIGITS).join('');
}

addKey(user, 'fullName', capitalizeWords);
addKey(user, 'phone', normalizePhoneNumber);

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
