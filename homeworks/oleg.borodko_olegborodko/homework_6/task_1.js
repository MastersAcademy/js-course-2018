const user = {};

function changeWord(word) {
    return word.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

let fullName;
Object.defineProperty(user, 'fullName', {
    get() {
        return fullName;
    },
    set(value) {
        fullName = changeWord(value);
    },
    configurable: false,
    enumerable: true,
});

function changePhone(string) {
    return string.match(/^\+|\d/g).join('');
}

let phone;
Object.defineProperty(user, 'phone', {
    get() {
        return phone;
    },
    set(value) {
        phone = changePhone(value);
    },
    configurable: false,
    enumerable: true,
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);

user.phone = '+38(096)-111-22-33';
console.log(user.phone);

user.phone = '38(096)+111b22+33';
console.log(user.phone);
