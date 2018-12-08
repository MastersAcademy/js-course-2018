const user = {};

Object.defineProperty(user, 'fullName', {
    configurable: true,
    enumerable: true,
    get: () => this.fullName,
    set: (value) => {
        this.fullName = value
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
    },
});

Object.defineProperty(user, 'phone', {
    configurable: true,
    enumerable: true,
    get: () => this.phone,
    set: (value) => {
        this.phone = value.trim().replace(/(?!^\+)\D+/g, '');
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '   ++38(096)+111bb22+33  ';
console.log(user.phone);
