const user = {};
const SEARCH_WORD = /\b\w/g;
const SEARCH_PHONE_PLUS_AND_DIGIT = /^\+\d+|\d+/g;

function addName(obj) {
    let protect;
    Object.defineProperty(obj, 'fullName', {
        get: () => protect,
        set(value) {
            protect = value.toLowerCase().replace(SEARCH_WORD, str => str.toUpperCase());
        },
        enumerable: true,
    });
}

function addPhone(obj) {
    let protect;
    Object.defineProperty(obj, 'phone', {
        get: () => protect,
        set(value) { protect = value.match(SEARCH_PHONE_PLUS_AND_DIGIT).join(''); },
    });
}

addName(user);
addPhone(user);

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
